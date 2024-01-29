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

function Customization() {
    return (
        <div className="customization">
            <Navigation />
            <div className="custom-header">
                <Container>
                    <h1 id="heading">CUSTOMIZATION</h1>
                    <p><span style={{color:"Red",fontWeight:"bold",fontSize:'25px'}}>AKILAN INFO TECH</span> has pioneered innovative and groundbreaking solutions based on Tally.ERP 9 Platform and TDL (Tally Definition Language). We exercise best-practices tailored not only to cutting costs for our clients but also delivering technically-sound solutions that are user-friendly and easy to learn, operate and maintain.</p>
                    <h2 id="heading" style={{backgroundColor:"cyan",border:'0'}}>Brief Explanations We Provided</h2>
                    <ul>
                        <li>Major Verticals</li>
                        <li>Medium Verticals</li>
                        <li>Minor Verticals</li>
                    </ul>
                </Container>
            </div>
            <div className="custom-content">
                <Container>
                    <h2 id="heading" style={{backgroundColor:"cyan",border:'0'}}>MAJOR VERTICALS</h2>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 700 }} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell align="center">S.No</StyledTableCell>
                                    <StyledTableCell align="center">Module Name</StyledTableCell>
                                    <StyledTableCell align="center">Description</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <StyledTableRow>
                                    <StyledTableCell component="th" scope="row">
                                        1.
                                    </StyledTableCell>
                                    <StyledTableCell align="left">Educational Institute Module</StyledTableCell>
                                    <StyledTableCell align="left">A complete Edcuational Institute module developed in Tally.ERP9 Platform. Covers the following Broad Requirements: Admission Management, Fee Management, Transport Management, Hostel Management, Inventory Management, Mark Sheet/Exam Management, Financial Accounting, Teachers Payroll Management, TC Management, Students/Teachers Attendance Management, MIS Reports, SMS Alerts to Parents Etc</StyledTableCell>
                                </StyledTableRow>
                                <StyledTableRow>
                                    <StyledTableCell component="th" scope="row">
                                        2.
                                    </StyledTableCell>
                                    <StyledTableCell align="left">Solutions for Cell Phone & Accessories Industry</StyledTableCell>
                                    <StyledTableCell align="left">A full-fledged solution on Tally.ERP 9 platform, which handles functions related to sale of cell phone & Cell phone service. A complete inventory management system for IMEI, EAN number tracking, item-wise profitability reports, enhanced voucher level security management, stylish POS invoicing, customer push SMS integration. Service module: It manages receiving of defective mobiles, guarantee/warranty tracking, technician wise service allocation & tracking, customer information & management system, spare parts management etc.</StyledTableCell>
                                </StyledTableRow>
                                <StyledTableRow>
                                    <StyledTableCell component="th" scope="row">
                                        3.
                                    </StyledTableCell>
                                    <StyledTableCell align="left">Integration Module</StyledTableCell>
                                    <StyledTableCell align="left">Integeration between third party software with Tally.ERP9. Both way data Synchronisation possible. Eg., pulling data from Finger print Biometric Systems to Tally.ERP9, Data from MDB, SQL, Excel Formats/Tables to Tally.ERP9.
                                    </StyledTableCell>
                                </StyledTableRow>
                                <StyledTableRow>
                                    <StyledTableCell component="th" scope="row">
                                        4.
                                    </StyledTableCell>
                                    <StyledTableCell align="left">White Goods Industry</StyledTableCell>
                                    <StyledTableCell align="left">A full-fledged solution on Tally Platform, which includes all processes from procurement to selling and servicing of white goods. Following are the various processes it captures
                                        <ul>
                                            <li>Indent-RFQ — Purchase Order — GRN — Purchase — Quality Management — Multiple Go down Stocking — Transfer to Branch Locations — Payment to Vendors</li>
                                            <li>Sales Order — Delivery Note — Invoicing as per KVAT Form</li>
                                            <li>Sales Man Tracking and commission calculations</li>
                                            <li>Sales man wise outstanding</li>
                                            <li>Management reports</li>
                                            <li>Service: Capturing of complaints from dealers/customers — Allocation of complaints to service technicians</li>
                                            <li>Onsite service call management (Capture if information)</li>
                                            <li>Guarantee/Warranty management</li>
                                            <li>Service billing</li>
                                            <li>Various MIS Reports</li>
                                        </ul>
                                    </StyledTableCell>
                                </StyledTableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Container>
                <Container>
                    <h2 id="heading" style={{backgroundColor:"cyan",border:'0'}}>MEDIUM VERTICALS</h2>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 700 }} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell align="center">S.No</StyledTableCell>
                                    <StyledTableCell align="center">Module Name</StyledTableCell>
                                    <StyledTableCell align="center">Description</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <StyledTableRow>
                                    <StyledTableCell component="th" scope="row">
                                        1.
                                    </StyledTableCell>
                                    <StyledTableCell align="left">Salesman Module</StyledTableCell>
                                    <StyledTableCell align="left">Salesman entry while invoicing, Sales man reports based on quantity and value, Sales Man Outstanding, Salesman Sales & Collection, Salesman Incentive if any. Commission Structures can also be defined based on which ready reports are available</StyledTableCell>
                                </StyledTableRow>
                                <StyledTableRow>
                                    <StyledTableCell component="th" scope="row">
                                        2.
                                    </StyledTableCell>
                                    <StyledTableCell align="left">SMS Module</StyledTableCell>
                                    <StyledTableCell align="left">SMS Module for Tally.ERP 9 is a unique CRM tool that helps you Stay-in-Touch with your customers, distributors, dealers, resellers, agents, other business associates and even your employees in a very cost effective manner using the powerful medium of SMS communication.</StyledTableCell>
                                </StyledTableRow>
                                <StyledTableRow>
                                    <StyledTableCell component="th" scope="row">
                                        3.
                                    </StyledTableCell>
                                    <StyledTableCell align="left">Barcode Module</StyledTableCell>
                                    <StyledTableCell align="left">Generating Barcodes within Tally.ERP9, Printing the same while Purchase entry as well as normal mode for every Stock Items. Supports Reading Barcodes using Barcode reader.
                                    </StyledTableCell>
                                </StyledTableRow>
                                <StyledTableRow>
                                    <StyledTableCell component="th" scope="row">
                                        4.
                                    </StyledTableCell>
                                    <StyledTableCell align="left">Fixed Assets Register</StyledTableCell>
                                    <StyledTableCell align="left">Recording of Fixed Assets and calcualtions of Depreciations as per ROC guidelines
                                    </StyledTableCell>
                                </StyledTableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Container>
                <Container>
                    <h2 id="heading" style={{backgroundColor:"cyan",border:'0'}}>MINOR VERTICALS</h2>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 700 }} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell align="center">S.No</StyledTableCell>
                                    <StyledTableCell align="center">Module Name</StyledTableCell>
                                    <StyledTableCell align="center">Description</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <StyledTableRow>
                                    <StyledTableCell component="th" scope="row">
                                        1.
                                    </StyledTableCell>
                                    <StyledTableCell align="left">Address Book</StyledTableCell>
                                    <StyledTableCell align="left">Gives you a one screen informations of all your Customers/Vendors Contact Details in a single Screen</StyledTableCell>
                                </StyledTableRow>
                                <StyledTableRow>
                                    <StyledTableCell component="th" scope="row">
                                        2.
                                    </StyledTableCell>
                                    <StyledTableCell align="left">User Activity Log</StyledTableCell>
                                    <StyledTableCell align="left">Gives you a complete information of User level activities like logged in from which computer, Windows user name, Entered by, Altered by details in a multi user environment.</StyledTableCell>
                                </StyledTableRow>
                                <StyledTableRow>
                                    <StyledTableCell component="th" scope="row">
                                        3.
                                    </StyledTableCell>
                                    <StyledTableCell align="left">Invoice Designing</StyledTableCell>
                                    <StyledTableCell align="left">Invoice Designing as per your requirement - Statutory / Preprinted / Plain paper formats
                                    </StyledTableCell>
                                </StyledTableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Container>
                <p id="custom-notes" className="text-center"> Depending on your specific requirements we can develop customisations starting from Invoice designing, Work flow management, Specific Reports, etc.</p>
            </div>
            <Footer />
        </div>
    );
}

export default Customization;