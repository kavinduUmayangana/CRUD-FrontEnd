import { Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const UserForm = ({ addUser, updateUser, submitted, data, isEdit }) => {
    const [id, setId] = useState('0');
    const [name, setName] = useState('');

    useEffect(() => {
        if (!submitted) {
            setId('0');
            setName('');
        }
    }, [submitted]);

    useEffect(() => {
        if (data?.id && data.id !== 0) {
            setId(data.id);
            setName(data.name);
        }
    }, [data]);

    return (
        <Grid
            container
            spacing={2}
            sx={{
                backgroundColor: "#f5f5f5",
                padding: '20px',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                maxWidth: '500px',
                margin: '20px auto',
                '@media (max-width: 600px)': {
                    padding: '10px',
                    maxWidth: '90%',
                },
            }}
        >
            <Grid item xs={12}>
                <Typography component={'h1'} sx={{ color: '#333', fontSize: '24px', marginBottom: '20px', textAlign: 'center' }}>
                    User Form
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography
                    component={'label'}
                    htmlFor="id"
                    sx={{
                        color: '#555',
                        fontSize: '16px',
                        display: 'block',
                        marginBottom: '8px',
                    }}
                >
                    ID
                </Typography>
                <input
                    type="number"
                    id="id"
                    name="id"
                    style={{
                        width: '100%',
                        padding: '10px',
                        borderRadius: '4px',
                        border: '1px solid #ddd',
                        fontSize: '16px',
                        boxSizing: 'border-box',
                    }}
                    value={id}
                    onChange={e => setId(e.target.value)}
                />
            </Grid>
            <Grid item xs={12}>
                <Typography
                    component={'label'}
                    htmlFor="name"
                    sx={{
                        color: '#555',
                        fontSize: '16px',
                        display: 'block',
                        marginBottom: '8px',
                    }}
                >
                    Name
                </Typography>
                <input
                required
                    type="text"
                    id="name"
                    name="name"
                    style={{
                        width: '100%',
                        padding: '10px',
                        borderRadius: '4px',
                        border: '1px solid #ddd',
                        fontSize: '16px',
                        boxSizing: 'border-box',
                    }}
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </Grid>
            <Grid item xs={12} sx={{ textAlign: 'center' }}>
                <button
                    style={{
                        backgroundColor: '#00cbe6',
                        color: '#fff',
                        padding: '10px 20px',
                        borderRadius: '30px',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '16px',
                        marginTop: '20px',
                        transition: 'opacity 0.3s ease',
                    }}
                    onClick={() => isEdit ? updateUser({ id, name }) : addUser({ id, name })}
                    onMouseOver={(e) => e.currentTarget.style.opacity = '0.8'}
                    onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
                >
                    {isEdit ? 'Update' : 'Add'}
                </button>
            </Grid>
        </Grid>
    );
}

export default UserForm;
