import Navigation from "./navbar";
import Container from 'react-bootstrap/Container';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Footer from './footer';
import './App.css';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function Training() {
    return (
        <div className="training">
            <Navigation />
            <div className="training-header">
                <Container>
                    <h1 id="heading">TRAINING</h1>
                    <p><span style={{ color: "Red", fontWeight: "bold", fontSize: '25px' }}>AKILAN INFO TECH</span> is an Authorised “TAC” – Tally Training and Assessment Centre, as approved by Tally Education Pvt. Ltd – the Education wing of Tally Solutions Pvt. Ltd. Following are the certified courses and online Certifications available:</p>
                    <h2 id="heading" style={{ backgroundColor: "cyan", border: '0' }}>Certification Overview</h2>
                    <h3 className="text-center" style={{ opacity: '0.8', letterSpacing: '2px', marginTop: '30px' }}>"GET CERTIFIED, GET RECOGNISED, GET EMPLOYED"</h3>
                    <p style={{ textAlign: 'left', marginTop: '30px' }}>Tally Education offers wide range of online certifications designed to take your career to the next level. It intends to enhance the employability of Tally learners by giving them a professional edge with verifiable digital certificate preferred by industries.</p>
                    <h3 id="heading" style={{ backgroundColor: "cyan", border: '0' }}>CERTIFICATION TYPES:</h3>
                    <ol>
                        <li>TallyACE</li>
                        <li>TallyPRO</li>
                        <li>TallyGURU</li>
                        <li>Introduction to GST</li>
                        <li>GST using Tally.ERP9</li>
                    </ol>
                    <h3 id="heading" style={{ backgroundColor: "cyan", border: '0' }}>WHY GET CERTIFIED</h3>
                    <ol>
                        <li>Verifiable Digital Certificate from Tally</li>
                        <li>Multiple Career Opportunities for certified candidates</li>
                        <li>Career Progression and Management</li>
                        <li>Industry Preferred Certificate</li>
                    </ol>
                </Container>
            </div>
            <div className="courses" style={{paddingBottom:'20px',marginBottom:'20px'}}>
                <Container>
                    <h2 id="heading" style={{ backgroundColor: "cyan", border: '0' }}>Course Structure</h2>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 700 }} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell align="center">S.No</StyledTableCell>
                                    <StyledTableCell align="left">Course Name</StyledTableCell>
                                    <StyledTableCell align="center">Expected Duration in Hr</StyledTableCell>
                                    <StyledTableCell align="center">Course Fee</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <StyledTableRow>
                                    <StyledTableCell component="th" scope="row">
                                        1.
                                    </StyledTableCell>
                                    <StyledTableCell align="left">Introduction to GST</StyledTableCell>
                                    <StyledTableCell align="center">20</StyledTableCell>
                                    <StyledTableCell align="left">3000</StyledTableCell>
                                </StyledTableRow>
                                <StyledTableRow>
                                    <StyledTableCell component="th" scope="row">
                                        2.
                                    </StyledTableCell>
                                    <StyledTableCell align="left">GST Using Tally.ERP 9</StyledTableCell>
                                    <StyledTableCell align="center">45</StyledTableCell>
                                    <StyledTableCell align="left">6750</StyledTableCell>
                                </StyledTableRow>
                                <StyledTableRow>
                                    <StyledTableCell component="th" scope="row">
                                        3.
                                    </StyledTableCell>
                                    <StyledTableCell align="left">TallyACE COMBO – Physical Book + Online Certification</StyledTableCell>
                                    <StyledTableCell align="center">60</StyledTableCell>
                                    <StyledTableCell align="left">9000</StyledTableCell>
                                </StyledTableRow>
                                <StyledTableRow>
                                    <StyledTableCell component="th" scope="row">
                                        4.
                                    </StyledTableCell>
                                    <StyledTableCell align="left">TallyPRO COMBO - Physical Book + Online Certification</StyledTableCell>
                                    <StyledTableCell align="center">90</StyledTableCell>
                                    <StyledTableCell align="left">13000</StyledTableCell>
                                </StyledTableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Container>
            </div>
            <Footer />
        </div>
    );
}

export default Training;