
import React from 'react';

function ViewTab() {
    return (
        <div style={styles.anchorWrapper}>
            <p style={styles.anchorP}>
                <a style={styles.anchor} href={'/map'}> Map View</a>
            </p>
            <p style={styles.anchorP}>
                <a style={styles.anchor} href={'/stateWise'}> Table View</a>
            </p>
            <p style={styles.anchorP}>
                <a style={styles.anchor} href={'/about'}> About Us</a>
            </p>
        </div>
    )
}


const styles = {
    anchor: {
        textDecoration: "none",
        color: "#123f5f",
        fontFamily: "sans-serif",
        fontWeight: "500"
    },
    anchorWrapper: {
        display: "flex",
        flexDirection: "row",
        textAlign: "center",
        background: "#f4f7fb",
        marginTop: "15px",

    },
    anchorP: {
        width: "33%",
        height: "20px"
    }
};
export default ViewTab

