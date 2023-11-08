import * as React from 'react';
import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import Add from '@mui/icons-material/Add';
import Remove from '@mui/icons-material/Remove';
import Rating from '@mui/material/Rating';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import Button from '@mui/material/Button';
import { Sheet } from '@mui/joy';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

export const ProductInfo = ({ details, onClick, count, setCount }) => {
    const productInfo = details.product;

    return (

        <Sheet sx={{ width: '100%', backgroundColor: 'none', }}>
            <Typography level="h2" sx={{ fontWeight: 600 }}>
                {productInfo?.brand}
            </Typography>
            <Typography level="h4" sx={{ fontWeight: 400, color: '#626262' }}>
                {productInfo?.title}
            </Typography>
            <Sheet sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Rating icon={<StarRateRoundedIcon fontSize="inherit" />} emptyIcon={<StarRateRoundedIcon fontSize="inherit" />} name="read-only" value={productInfo?.totalRating ? productInfo?.totalRating : 0} readOnly sx={{
                    color: '#FF8C4B',
                    my: 2,
                    mx: -0.6,
                    fontSize: {
                        xs: 28,
                        sm: 30,
                        md: 32,
                        lg: 34,
                        xl: 36,
                    }
                }} />
                <Typography level="h2title-md" sx={{ color: '#B6B6B6', }}>
                    ({productInfo?.price}) Ratings
                </Typography>
            </Sheet>
            <Sheet sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                <Typography level="h1" >
                    ${productInfo?.price}
                </Typography>
                <Typography level="h2" sx={{ color: '#B6B6B6', textDecoration: 'line-through', fontWeight: 500 }}>
                    ${productInfo?.price}
                </Typography>
                <Typography level="h4" sx={{ color: '#FF404B', fontWeight: 500 }}>
                    ${productInfo?.price}
                </Typography>
            </Sheet>

            <hr style={{ width: '100%', border: '0.1px solid #B6B6B6' }}></hr>

            <Sheet sx={{ display: 'flex', alignItems: 'center', my: 5, gap: 2 }}>
                <Typography level="title-lg" sx={{ fontWeight: 600 }}>
                    Quantity:
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        border: 1,
                        borderColor: '#1B4B66',
                        borderRadius: 4,
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 0.8,
                        }}
                    >
                        <IconButton
                            size="sm"
                            onClick={() => setCount((c) => c > 1 ? c - 1 : c)}
                        >
                            <Remove />
                        </IconButton>
                        <Typography fontWeight="md" textColor="text.secondary">
                            {count}
                        </Typography>
                        <IconButton
                            size="sm"
                            onClick={() => setCount((c) => c + 1)}
                        >
                            <Add />
                        </IconButton>
                    </Box>
                </Box>

            </Sheet>

            <Sheet sx={{ display: 'flex', gap: 3 }}>
                <Button variant="contained"
                    sx={{
                        flex: '55%',
                        backgroundColor: '#1B4B66',
                        textTransform: 'none',
                        borderRadius: 2,
                        fontSize: 18,
                        boxShadow: 'none',
                    }}
                    startIcon={<LocalMallOutlinedIcon onClick={onClick} />
                    }>
                    Add to bag
                </Button>
                <Button variant="outlined"
                    sx={{
                        flex: '45%',
                        textTransform: 'none',
                        borderRadius: 2,
                        borderColor: '#1B4B66',
                        color: '#1B4B66',
                        fontSize: 18,
                        boxShadow: 'none'
                    }}
                    startIcon={<FavoriteBorderOutlinedIcon />}>
                    Add to Wishlist
                </Button>
            </Sheet>
        </Sheet>

    );
};