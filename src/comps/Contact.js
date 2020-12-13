import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { Label } from '@material-ui/icons';
import PhoneIcon from '@material-ui/icons/Phone';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
const validationSchema = yup.object({
    name: yup
        .string('Enter your name')
        .required('Email is required'),
    email: yup
        .string('Enter your email')
        .required('email is required'),
    message: yup
        .string('Enter your password'),



});


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export const WithMaterialUI = () => {
    const [data, setData] = useState([])

    const classes = useStyles();
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
            setData(values)
        },


    });
    console.log(data)


    return (
        <>
            <div >
               <div style={{backgroundImage: `url("https://cdn1.vectorstock.com/i/1000x1000/47/55/contact-neon-icons-vector-29184755.jpg")`, height:'100%', paddingTop:"7%"}}>
                <h2 style={{textAlign:'center',color:'white'}}><b>CONTACT US</b> <br></br>________</h2>
                </div>


                <div className={classes.root}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} >
                            <Paper style={{ backgroundImage: 'linear-gradient(120deg,#008000,#7b68ee )', color: 'white' }} className={classes.paper}>
                                <h4 style={{ marginBottom: '4%' }}>My Contacts</h4>
                                <div style={{ marginTop: '10%' }}>
                                    <p>03342954361</p>
                                    <PhoneIcon /> </div><br></br>
                                <div style={{ marginTop: '2%' }}>
                                    <p>github/ramshanadeem</p>
                                    <GitHubIcon /></div>
                                <div style={{ marginTop: '4%' }}>
                                    <p>rimsnadeem64@gmail.com</p>
                                    <EmailIcon /></div>

                            </Paper>

                        </Grid>
                        <Grid item xs={12} sm={6} >
                            <Paper className={classes.paper}>
                                <h4>Contact Me</h4>
                                <form onSubmit={formik.handleSubmit}>
                                    <TextField
                                        fullWidth
                                        id="name"
                                        name="name"
                                        label="Full Name"
                                        type="text"
                                        value={formik.values.name}
                                        onChange={formik.handleChange}
                                        error={formik.touched.name && Boolean(formik.errors.name)}
                                        helperText={formik.touched.name && formik.errors.name}
                                    />
                                    <TextField
                                        fullWidth
                                        id="email"
                                        name="email"
                                        label="Email"
                                        style={{ marginTop: '4%' }}
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        error={formik.touched.email && Boolean(formik.errors.email)}
                                        helperText={formik.touched.email && formik.errors.email}
                                    />

                                    <TextareaAutosize
                                        rowsMax={4}

                                        style={{ width: '500px', height: '80px', marginTop: '5%' }}

                                        fullWidth
                                        id="message"
                                        name="message"
                                        label="Message"
                                        type="text"
                                        value={formik.values.message}
                                        onChange={formik.handleChange}
                                        error={formik.touched.message && Boolean(formik.errors.message)}
                                        helperText={formik.touched.message && formik.errors.message}
                                    />

                                    <Button style={{ marginTop: '2%' }} color="primary" variant="contained" fullWidth type="submit">
                                        Submit
                                    </Button>
                                </form>

                            </Paper>
                        </Grid>

                    </Grid>

                </div>

            </div >
        </>
    );
};