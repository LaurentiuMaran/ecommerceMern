import * as React from 'react';
import { Admin, Resource } from 'react-admin';
import AdminLayout from '../../components/AdminDashboard/AdminLayout';
import adminDataProvider from '../../utils/adminDataProvider';
import {
  ProductList,
  ProductEdit,
  ProductShow,
  ProductCreate,
} from '../../components/AdminDashboard/Products';
import {
  OrderList,
  OrderEdit,
  OrderShow,
} from '../../components/AdminDashboard/Orders';

const AdminPanel = () => (
  <Admin
    dataProvider={adminDataProvider}
    layout={AdminLayout}
    basename="/admin"
  >
    <Resource
      name="products"
      list={ProductList}
      edit={ProductEdit}
      show={ProductShow}
      create={ProductCreate}
    />
    <Resource
      name="orders"
      list={OrderList}
      edit={OrderEdit}
      show={OrderShow}
    />
  </Admin>
);

export default AdminPanel;
