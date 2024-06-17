import React, { useState } from 'react';
import { Button, TextField, Container, Typography } from '@mui/material';
import Api from '../helpers/Api';

const CreateDelivery = () => {
    const [deliveryDate, setdeliveryDate] = useState('');
    const [fromWarehouse, setfromWarehouse] = useState('');
    const [destination, setDestination] = useState('');

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const delivery = { deliveryDate, fromWarehouse, destination };

        try {
            const response = await Api.post('deliveries', delivery);
            console.log('Delivery created successfully:', response);
        } catch (error) {
            console.error('There was an error creating the delivery!', error);
        }
    };

    return (
        <Container>
            <Typography variant="h4" component="h1" gutterBottom>
                Create New Delivery
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Delivery Date"
                    value={deliveryDate}
                    onChange={(e) => setdeliveryDate(e.target.value)}
                    fullWidth
                    margin="normal"
                    required
                />
                <TextField
                    label="From Warehouse"
                    type="date"
                    value={fromWarehouse}
                    onChange={(e) => setfromWarehouse(e.target.value)}
                    fullWidth
                    margin="normal"
                    required
                    InputLabelProps={{ shrink: true }}
                />
                <TextField
                    label="Destination"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    fullWidth
                    margin="normal"
                    required
                />
                <Button type="submit" variant="contained" color="primary">
                    Create Delivery
                </Button>
            </form>
        </Container>
    );
};

export default CreateDelivery;
