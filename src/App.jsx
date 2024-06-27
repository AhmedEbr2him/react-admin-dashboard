import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Topbar from './scenes/global/Topbar';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Dashboard from './scenes/dashboard/Dashboard';
import Drawer from './scenes/global/Drawer';
import Team from './scenes/team';
import Contacts from './scenes/contacts';
import Invoices from './scenes/invoices';
import Form from './scenes/form';
// import Contacts from './scenes/contacts';
// import Bar from './scenes/bar';
// import Form from './scenes/form';
// import Line from './scenes/line';
// import Pie from './scenes/pie';
// import Faq from './scenes/faq';
// import Geography from './scenes/geography';
import Calendar from './scenes/calender';

const App = () => {
  const [theme, colorMode] = useMode();

  return (
    <BrowserRouter>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className='app'>
            <Drawer />
            <main className='content'>
              <Topbar />
              <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/team' element={<Team />} />
                <Route path='/contacts' element={<Contacts />} />
                <Route path='/invoices' element={<Invoices />} />
                <Route path='/form' element={<Form />} />
                {/* <Route path='/bar' element={<Bar />} /> */}
                {/* <Route path='/pie' element={<Pie />} /> */}
                {/* <Route path='/line' element={<Line />} /> */}
                {/* <Route path='/faq' element={<FAQ />} /> */}
                <Route path='/calendar' element={<Calendar />} />
                {/* <Route path='/geography' element={<Geography />} /> */}
              </Routes>
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </BrowserRouter>
  );
};
export default App;
