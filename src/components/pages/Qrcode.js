import React, { useState } from 'react';
import QRcode from 'qrcode';
import { Grid, Box, TextField, Button, Link } from '@mui/material';

const Qrcode = () => {

    const [url, setUrl] = useState('')
    const [qrcode, setQrcode] = useState('')

    const GenerateQRcode = () => {
        QRcode.toDataURL(url, {
            width:370,
            margin: 2,
            color: {
                dark: '#335383FF',
				light: '#EEEEEEFF'
            }
        }, (err, url) => {
            if(err) return console.error(err)
            console.log(url)
            setQrcode(url)
        })
    }

  return (
    <>
        <Grid container justifyContent='center'>
            <Grid item>
                <h1>QR Code Generator</h1>
                <Box>
                    <TextField label="URL" value={url} onChange={(e) => setUrl(e.target.value)} />
                    <Button variant="contained" sx={{ mx: 2, py: 2 }} size='large' onClick={GenerateQRcode}>Generate</Button>
                </Box>
               
                    {qrcode && 
                    <>
                        <Box sx={{my:2}}>
                            <img src={qrcode} />
                        </Box>
                        <Link href={qrcode} download='qrcode.png'>Download</Link>
                    </>
                    }
                
               
            </Grid>
        </Grid>
    </>
  )
}

export default Qrcode