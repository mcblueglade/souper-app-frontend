import React from 'react';

import CustomDropdown from 'components/MaterialKitComponents/CustomDropdown/CustomDropdown';

export default function ListingsDropdown() {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <CustomDropdown
      hoverColor="rose"
      dropdownHeader="Sort By"
      buttonText="Sort By"
      buttonProps={{
        round: true,
        color: 'rose',
      }}
      dropdownList={[
        'Expiry Date',
        'Category',
        //{ divider: true },
        //'Separated link',
        //{ divider: true },
        //'One more separated link',
      ]}
    />
  );
}