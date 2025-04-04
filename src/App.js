import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ProgressBar from './components/ProgressBar/ProgressBar';
import InstructionPage from './components/InstructionPage/InstructionPage';
import ComplaintSelectType from './components/ComplaintSelectType/ComplaintSelectType';
import ComplaintDetails from './components/ComplaintDetails/ComplaintDetails';
import './App.css';

const App = () => {
    const [darkMode, setDarkMode] = useState(false);

    const theme = createTheme({
        palette: {
            mode: darkMode ? 'dark' : 'light',
            primary: {
                main: '#1a237e',
            },
            secondary: {
                main: '#0d47a1',
            },
            accent: {
                main: '#2962ff',
            },
            background: {
                default: darkMode ? '#121212' : '#f5f5f5',
                paper: darkMode ? '#1e1e1e' : '#ffffff',
            },
        },
        typography: {
            fontFamily: '"Segoe UI", Arial, sans-serif',
            h1: {
                fontSize: '2.5rem',
                fontWeight: 600,
            },
            h2: {
                fontSize: '2rem',
                fontWeight: 600,
            },
            h3: {
                fontSize: '1.75rem',
                fontWeight: 600,
            },
            body1: {
                fontSize: '1rem',
                lineHeight: 1.6,
            },
        },
        components: {
            MuiButton: {
                styleOverrides: {
                    root: {
                        textTransform: 'none',
                        borderRadius: '8px',
                        padding: '8px 24px',
                        fontWeight: 600,
                    },
                },
            },
            MuiTextField: {
                defaultProps: {
                    variant: 'outlined',
                },
                styleOverrides: {
                    root: {
                        '& .MuiOutlinedInput-root': {
                            borderRadius: '8px',
                        },
                    },
                },
            },
        },
    });

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return ( <
        ThemeProvider theme = { theme } >
        <
        div className = { `app-container ${darkMode ? 'dark-mode' : ''}` } >
        <
        Router >
        <
        Header darkMode = { darkMode }
        toggleDarkMode = { toggleDarkMode }
        /> <
        ProgressBar / >
        <
        main className = "main-content" >
        <
        Routes >
        <
        Route path = "/"
        element = { < InstructionPage / > }
        /> <
        Route path = "/complaint-type"
        element = { < ComplaintSelectType / > }
        /> <
        Route path = "/complaint-details"
        element = { < ComplaintDetails / > }
        /> <
        Route path = "*"
        element = { < Navigate to = "/"
            replace / > }
        /> <
        /Routes> <
        /main> <
        Footer / >
        <
        /Router> <
        /div> <
        /ThemeProvider>
    );
};

export default App;