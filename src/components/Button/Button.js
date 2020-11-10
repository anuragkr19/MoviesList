import React from 'react';
import Button from '@material-ui/core/Button';

const NewButton =  ({ onClick }) => (
     <Button onClick = {onClick} color="primary">
         Choose
     </Button>
);

export default NewButton;