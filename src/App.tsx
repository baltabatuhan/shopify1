import { Layout } from "antd";

const { Header, Content, Footer } = Layout

function App() {
  return (
    <Layout>
      <Header>Header</Header>
      <Content className="site-layout" style={{ padding: "0 50px", marginTop: 64 }}>Content</Content>
      <Footer style={{ textAlign: 'center' }}>Designed by Batuhan Balta</Footer>
    </Layout>
  )
}

export default App;