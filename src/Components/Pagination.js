import * as React from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import PaginationItem from '@mui/material/PaginationItem';
import './style.css';





export default function PaginationControlled() {
  
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
      <Pagination 
        hidePrevButton 
        renderItem={(item) => (
          <PaginationItem
            components={{
              next: (props) => <button style={{color: '#626262', border:'none', background: 'none', fontSize: '0.9rem', margin: 1}} {...props}>Next</button>,
            }}
            {...item}
          />
        )}
        shape="rounded"
        count={10} 
        page={page} 
        onChange={handleChange}

        sx={{backgroundColor: '#F1F1F1', width: 'fit-content', borderRadius: 2, px: 0.3, py: 0.5, color: '#626262',
         '& .MuiPaginationItem-root': {
          color: '#626262',
         },
         '& .Mui-selected': {
          backgroundColor: '#1B4B66 !important',
          color:'#FFFFFF',
         },
        }}
        />
  );
}