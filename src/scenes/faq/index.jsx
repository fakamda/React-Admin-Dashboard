import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreOutlined from "@mui/icons-material/ExpandMoreOutlined"
import { tokens } from "../../theme";


const FAQ = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
  return (
    <Box m="20px">
        <Header title="FAQ" subtitle="Frequently Asked Questions Page" />
        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreOutlined/>}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    An important question
                </Typography>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla dolore optio soluta libero, quas similique quis minima officiis aut explicabo?
                    </Typography>
                </AccordionDetails>
            </AccordionSummary>
        </Accordion>
        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreOutlined/>}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    Another important question
                </Typography>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla dolore optio soluta libero, quas similique quis minima officiis aut explicabo?
                    </Typography>
                </AccordionDetails>
            </AccordionSummary>
        </Accordion>
        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreOutlined/>}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    Your favorite question
                </Typography>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla dolore optio soluta libero, quas similique quis minima officiis aut explicabo?
                    </Typography>
                </AccordionDetails>
            </AccordionSummary>
        </Accordion>
        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreOutlined/>}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    Some random question
                </Typography>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla dolore optio soluta libero, quas similique quis minima officiis aut explicabo?
                    </Typography>
                </AccordionDetails>
            </AccordionSummary>
        </Accordion>
        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreOutlined/>}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    The final question
                </Typography>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla dolore optio soluta libero, quas similique quis minima officiis aut explicabo?
                    </Typography>
                </AccordionDetails>
            </AccordionSummary>
        </Accordion>
    </Box>
  )
}

export default FAQ