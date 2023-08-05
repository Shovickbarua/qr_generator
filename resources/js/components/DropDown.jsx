// import React from 'react';
// import { DownOutlined } from '@ant-design/icons';
// import { Dropdown, Space } from 'antd';
// const items = [
//   {
//     label: <a href="https://www.antgroup.com">1st menu item</a>,
//     key: '0',
//   },
//   {
//     label: <a href="https://www.aliyun.com">2nd menu item</a>,
//     key: '1',
//   },
//   {
//     type: 'divider',
//   },
//   {
//     label: '3rd menu item',
//     key: '3',
//   },
// ];
// const DropdownMenu = () => {
// return (<Dropdown
//     menu={{
//       items,
//     }}
//     trigger={['click']}
//   ><>
//     <a onClick={(e) => e.preventDefault()}>
//       <Space>
//         Click me
//         <DownOutlined />
//       </Space>
//     </a>
//     </>
//   </Dropdown>
// )
// };
// export default DropdownMenu;


import { DownOutlined } from '@ant-design/icons';
// import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import React from 'react';

const items = [
  {
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        1st menu item
      </a>
    ),
    key: '0',
  },
  {
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        2nd menu item
      </a>
    ),
    key: '1',
  },
  {
    type: 'divider',
  },
  {
    label: '3rd menu item（disabled）',
    key: '3',
    disabled: true,
  },
];

const DropdownMenu= () => (
  <Dropdown menu={{ items }}>
    <a onClick={e => e.preventDefault()}>
      <Space>
        Hover me
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
);

export default DropdownMenu;