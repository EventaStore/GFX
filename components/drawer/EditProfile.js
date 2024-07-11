import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import Drawer from '../elements/drawer';




function DrawerExample({}) {


    return (
        <>
            <Drawer id="Test-Drawer" name={'محلات تانيه'} addWhiteShadow={true}>

            </Drawer>
        </>
    );
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = {

};
export default connect(mapStateToProps, mapDispatchToProps)(DrawerExample);
