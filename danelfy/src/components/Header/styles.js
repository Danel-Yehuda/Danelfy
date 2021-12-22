import { makeStyles } from '@material-ui/core'

export default makeStyles(()=>({
    appbar: {
        backgroundColor: "#4C0070",
        paddingRight: "79px",
        paddingLeft: "118px",
    },
    logo: {
        fontFamily: "Work Sans, sans-serif",
        fontWeight: 600,
        color: "#FFFEFE",
        textAlign: "left",
    },
    toolbar:{
        display: "flex",
        justifyContent: "space-between",
    },
    menuButton: {
        fontFamily: "Open Sans, sans-serif",
        fontWeight: 700,
        size: "18px",
        marginLeft: "38px",
    },

}))