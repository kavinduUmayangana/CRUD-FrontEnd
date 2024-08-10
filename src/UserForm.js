import { Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const UserForm = ({ addUser,updateUser, submitted,data,isEdit }) => { // Correctly destructure props here
    const [id, setId] = useState('0');
    const [name, setName] = useState('');

    useEffect(() => {
        if (!submitted) {
            setId('0');
            setName('');
        }
    }, [submitted]);
    useEffect(() => {
      if(data?.id && data.id !==0){
        setId(data.id);
        setName(data.name)
      }
    },[data])

    return (
        <Grid
            container
            spacing={2}
            sx={{
                backgroundColor: "#ffffff",
                margin: '100px',

                display: 'block',
            }}
        >
            <Grid item xs={12}>
                <Typography component={'h1'} sx={{ color: '#000000' }}>User Form</Typography>
            </Grid>
            <Grid item>
                <Typography
                    component={'label'}
                    htmlFor="id"
                    sx={{
                        color: '#000000',
                        marginRight: '20px',
                        fontSize: '16px',
                        width: '100px',
                        display: 'block',
                    }}
                >
                    ID
                </Typography>
                <input
                    type="number"
                    id="id"
                    name="id"
                    style={{ width: '400px' }}
                    value={id}
                    onChange={e => setId(e.target.value)}
                />
            </Grid>
            <Grid item>
                <Typography
                    component={'label'}
                    htmlFor="name"
                    sx={{
                        color: '#000000',
                        marginRight: '20px',
                        fontSize: '16px',
                        width: '100px',
                        display: 'block',
                    }}
                >
                    Name
                </Typography>
                <input
                    type="text"
                    id="name"
                    name="name"
                    style={{ width: '400px' }}
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </Grid>
            <Grid item>
                <button
                    style={{
                        margin: 'auto',
                        marginBottom: '20px',
                        backgroundColor: '#00cbe6',
                        color: '#000000',
                        marginLeft: '15px',
                        marginTop: '20px',
                        '&:hover': {
                            opacity: '0.7',
                            backgroundColor: '#00c6e6',
                        }
                    }}
                    onClick={() =>isEdit ? updateUser({id,name}) :addUser({ id, name })} // Correctly pass the id and name
                >
                    {isEdit ? 'Update' : 'Add'}
                </button>
            </Grid>
        </Grid>
    );
}

export default UserForm;
