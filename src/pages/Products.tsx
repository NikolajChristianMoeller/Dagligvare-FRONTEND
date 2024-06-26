import { Button, Paper } from "@mui/material"
import AdsClickIcon from '@mui/icons-material/AdsClick';
import useTestHook from "../hooks/useTestHook.tsx";

function Products() {
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
                <div>Products</div>

                <Button variant="outlined" startIcon={<AdsClickIcon />} onClick={handleClick}>
                    Click me
                </Button>

            </Paper >

        </>

    )
}

export default Products
