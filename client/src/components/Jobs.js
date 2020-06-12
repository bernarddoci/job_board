import React from 'react';
import { Typography } from '@material-ui/core';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

import Job from './Job';
import JobModal from './JobModal';

export default function Jobs ({ jobs }) {
    // Pagination
    const [activeStep, setActiveStep] = React.useState(0);
    
    const numJobs = jobs.length;
    const numPages = Math.ceil(numJobs / 10);
    const jobsOnPage = jobs.slice(activeStep * 10, (activeStep * 10) + 10)
    
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    // Modal
    const [open, setOpen] = React.useState(false);
    const [selectedJob, selectJob] = React.useState({});

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    
    
    return (
        <div className="jobs">
            <JobModal open={open} job={selectedJob} handleClose={handleClose}/>
            <Typography variant='h4' component="h1">
                Remote Software Jobs
            </Typography>
            <Typography variant='h6' component="h2">
                Found {numJobs} Jobs
            </Typography>
            {
                jobsOnPage.map((job, i) => <Job job={job} key={i} onClick={() => {
                    handleClickOpen();
                    selectJob(job);
                }}/>)
            }
            <div>
                Page {activeStep + 1} of {numPages}
            </div>
            <MobileStepper
                className="pagination"
                variant="progress"
                steps={numPages}
                position="static"
                activeStep={activeStep}
                nextButton={
                    <Button size="small" onClick={handleNext} disabled={activeStep === numPages - 1}>
                        Next
                        <KeyboardArrowRight />
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                        <KeyboardArrowLeft />
                        Back
                    </Button>
                }
            />
        </div>
    )
}