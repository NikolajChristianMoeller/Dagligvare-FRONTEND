import { Button, Paper } from "@mui/material"
import AdsClickIcon from '@mui/icons-material/AdsClick';
import useTestHook from "../hooks/useTestHook.tsx";

function Deliveries() {
    const { data, isLoading } = useTestHook();
    console.log(data, isLoading);


    const handleClick = () => {
        console.info("Button clicked");
    }

    return (
        <>
            <Paper elevation={3}
                   sx={{
                       padding: 2,
                       margin: 2,
                       textAlign: 'center',
                   }}
            >
                <div>Deliveries</div>

                <Button variant="outlined" startIcon={<AdsClickIcon />} onClick={handleClick}>
                    Click me
                </Button>

            </Paper >

        </>

    )
}

export default Deliveries
