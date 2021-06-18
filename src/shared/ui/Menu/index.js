import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import './style.scss'

export default function SimpleMenu(props) {
  const { menuItems = [], btnName } = props

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className='drop-down-menu__container'>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        {btnName || 'Open Menu'}
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <div className='drop-down-menu__portal'>
          {menuItems.map((item, key) => <MenuItem key={key} onClick={handleClose}>{item}</MenuItem>)}
        </div>

      </Menu>
    </div>
  );
}
