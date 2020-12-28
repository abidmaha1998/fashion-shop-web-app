import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Table } from 'antd';
const CompRecapitulatif = () => {
  const renderContent = (value, row, index) => {
    const obj = {
      children: value,
      props: {},
    };
    if (index === 4) {
      obj.props.colSpan = 0;
    }
    return obj;
  };

  const columns = [
    {
      title: 'Nom',
      dataIndex: 'name',
      render: (text, row, index) => {
        if (index < 4) {
          return <a>{text}</a>;
        }
        return {
          children: <a>{text}</a>,
          props: {
            colSpan: 5,
          },
        };
      },
    },
    {
      title: 'Prix unitaire',
      dataIndex: 'Prixunit',
      render: renderContent,
    },
    {
      title: 'Qte',
      dataIndex: 'qte',
      render: renderContent,
    },
    {
      title: 'Prix totale',
      dataIndex: 'Prixtot',
      render: renderContent,
    },
    {
      title: 'Remise',
      dataIndex: 'remise',
      render: renderContent,
    },
    {
      title: 'Prix final',
      dataIndex: 'prixfinal',
      render: renderContent,
    },

  ];

  const data = [
    {
      key: '1',
      name: 'John Brown',
      Prixunit: 32,
      qte: '0571-22098909',
      Prixtot: 18889898989,
      remise: 10,
      prixfinal: 12000

    },
    {
      key: '2',
      name: 'John Brown',
      Prixunit: 32,
      qte: '0571-22098909',
      Prixtot: 18889898989,
      remise: 10,
      prixfinal: 1200

    },
  ];
  return (
    <Table columns={columns} dataSource={data} bordered />
  );
}

export default CompRecapitulatif;