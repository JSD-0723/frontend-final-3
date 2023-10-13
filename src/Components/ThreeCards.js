
import React from 'react';
import { styled } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Grid from '@mui/joy/Grid';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Makeup from '../Assets/Makeup.svg';
import Facepack from '../Assets/Facepack.svg';
import Skincare from '../Assets/Skincare.svg';
import pinkArrow from '../Assets/pinkArrow.svg';
import blueArrow from '../Assets/blueArrow.svg';
import { CardActions } from '@mui/joy';
import IconButton from '@mui/joy/IconButton';

function ThreeCards() {
    return (
        <Grid
            container
            spacing={{ xs: 2, md: 0 }}
            columns={{ xs: 12, sm: 12, md: 12 }}
            sx={{ flexGrow: 1, width: 4 / 4 }}
        >

            <Grid xs={12} sm={16} md={12} sx={{}}>
                <Card sx={{ height: '400px', mx: 2, border: 0, mb: 4 }}>
                    <CardCover sx={{ objectFit: "fill", }}>
                        <img src={Makeup} />
                    </CardCover>

                    <CardContent sx={{ mt: 12, ml: 3 }}>
                        <Typography level="title-lg" textColor="#97451F" sx={{ fontSize: '1.8rem', fontWeight: '300' }}>
                            LIFESTYLE
                        </Typography>
                        <Typography level="title-lg" textColor="#97451F" sx={{ fontSize: '3.5rem', fontWeight: '750', width: 4 / 9 }}>
                            Makeup Accessories from Top Brands
                        </Typography>

                    </CardContent>
                </Card>
            </Grid>
            
            <Grid xs={6} sm={6} md={6} sx={{}}>
                <Card sx={{ height: '228px', mx: 2, border: 0 }}>
                    <CardCover sx={{ objectFit: "fill", }}>
                        <img src={Skincare} />
                    </CardCover>

                    <CardContent sx={{width: 2/5, right: 40, position: 'absolute' }}>
                    <Typography level="title-lg" textColor="#A53F64" sx={{ fontWeight: '750', fontSize: '3rem', textAlign: 'right', justifyContent:'flex-end' }}>
                    Skincare Essentials
                        </Typography>
                        <CardActions sx={{justifyContent:'flex-end'}}>
                            <img src={pinkArrow} />
                        </CardActions>
                    </CardContent>
                </Card>
            </Grid>
            <Grid xs={6} sm={6} md={6} sx={{}}>
                <Card sx={{ height: '228px', mx: 2, border: 0 }}>
                    <CardCover sx={{ objectFit: "fill", }}>
                        <img src={Facepack} />
                    </CardCover>

                    <CardContent sx={{width: 2/5, right: 40, position: 'absolute' }}>
                    <Typography level="title-lg" textColor="#1B4B66" sx={{ fontWeight: '750', fontSize: '3rem', textAlign: 'right', justifyContent:'flex-end' }}>
                            Facepacks & Peels
                        </Typography>
                        <CardActions sx={{justifyContent:'flex-end'}}>
                            <img src={blueArrow} />
                        </CardActions>
                    </CardContent>
                </Card>
            </Grid>

        </Grid>
    );
}

export default ThreeCards;
