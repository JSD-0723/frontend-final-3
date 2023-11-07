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
    [count, setCount] = React.useState(1);

    return (

        <Sheet>
            <Typography level="h2" sx={{ fontWeight: 600 }}>
                {productInfo?.brand}
            </Typography>
            <Typography level="h4" sx={{ fontWeight: 400, color: '#626262' }}>
                {productInfo?.title}
            </Typography>
            <Rating icon={<StarRateRoundedIcon fontSize="inherit" />} emptyIcon={<StarRateRoundedIcon style={{ opacity: 0.55 }} fontSize="inherit" />} name="read-only" value={productInfo?.totalRating? productInfo?.totalRating:0} readOnly sx={{
                color: '#FF8C4B',
                "& .MuiRating-icon": {
                    width: {
                        xs: '1.3rem',
                        sm: '1.4rem',
                        md: '1.5rem',
                        lg: '1.6rem',
                        xl: '1.7rem',
                    }
                },
                fontSize: {
                    xs: 28,
                    sm: 30,
                    md: 32,
                    lg: 34,
                    xl: 36,
                }
            }} />
            <Typography fontSize="xl" sx={{ fontWeight: 700, }}>
                ${productInfo?.price}
            </Typography>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 2,
                    mt: 4,
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        pt: 4,
                        mb: 2,
                        borderTop: '1px solid',
                        borderColor: 'background.level1',
                    }}
                >
                    <IconButton
                        size="sm"
                        variant="outlined"
                        onClick={() => setCount((c) => c > 1 ? c - 1 : c)}
                    >
                        <Remove />
                    </IconButton>
                    <Typography fontWeight="md" textColor="text.secondary">
                        {count}
                    </Typography>
                    <IconButton
                        size="sm"
                        variant="outlined"
                        onClick={() => setCount((c) => c + 1)}
                    >
                        <Add />
                    </IconButton>
                </Box>
            </Box>
            <Button variant="contained" startIcon={<LocalMallOutlinedIcon onClick={onClick} />}>
                Add to Bag
            </Button>
            <Button variant="outlined" startIcon={<FavoriteBorderOutlinedIcon />}>
                Add to Wishlist
            </Button>
        </Sheet>

    );
};