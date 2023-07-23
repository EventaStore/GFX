import { useEffect, useState } from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { FiLoader } from 'react-icons/fi';
import { useRouter } from 'next/router'; 
const Bookings = () => {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter(); 
    useEffect(() => {
        const authToken = localStorage.getItem('authToken'); 
        if (authToken) {
            fetchBookings(authToken);
        } else {
            // No authToken found, redirect to the login page
            router.push('/dashboard/login');
          }
    }, []);

    const fetchBookings = async (authToken) => {
        try {
            const response = await fetch('/api/getBooks', {
                headers: {
                    Authorization: `Bearer ${authToken}`,
                },
            });

            if (!response.ok) {
                throw new Error('Failed to fetch bookings');
            }

            const data = await response.json();
            setBookings(data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching bookings:', error);
            setLoading(false);
        }
    };

    const handleDeleteBooking = async (id) => {
        try {
            setLoading(true);
            const authToken = localStorage.getItem('authToken'); 
            if (authToken) {
                const response = await fetch(`/api/deleteBook?id=${id}`, {
                    method: 'DELETE',
                    headers: {
                        Authorization: `Bearer ${authToken}`,
                    },
                });

                if (!response.ok) {
                    throw new Error('Failed to delete booking');
                }

                // If the deletion was successful, update the state to reflect the changes
                setBookings((prevBookings) => prevBookings.filter((booking) => booking._id !== id));
            }
        } catch (error) {
            console.error('Error deleting booking:', error);
        } finally {
            setLoading(false);
        }
    };
    if(bookings)
    return (
        <>
            {loading ? (
                <div className="flex justify-center items-center min-h-screen">
                    <FiLoader className="animate-spin h-8 w-8" />
                </div>
            ) :
                (
                    <div className="container mx-auto">
                        <h1 className="text-2xl font-semibold my-4">List of Bookings</h1>
                        <ul className="space-y-4">
                            {bookings.map((booking) => (
                                <li key={booking._id} className="border p-4 rounded-md">
                                    <p>
                                        <strong>Name:</strong> {booking.name}
                                    </p>
                                    <p>
                                        <strong>Email:</strong> {booking.email}
                                    </p>
                                    <p>
                                        <strong>Date:</strong> {booking.date}
                                    </p>
                                    <p>
                                        <strong>Time:</strong> {booking.time}
                                    </p>
                                    <p>
                                        <strong>Message:</strong> {booking.message}
                                    </p>
                                    <button
                                        onClick={() => handleDeleteBooking(booking._id)}
                                        className="mt-2 text-red-500 hover:text-red-700 float-right"
                                    >
                                        <RiDeleteBin6Line size={20} />

                                    </button>
                                    <p>
                                        <strong>Phone:</strong> {booking.phone}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
        </>
    );
};

export default Bookings;
