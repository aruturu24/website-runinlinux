import styled from "styled-components";
import "./App.css";

function App() {
  return (
    <HomeDetails>
      <img src="https://github.com/refined-github.png" alt="github" />
      <h2>RunInLinux</h2>
      <p>The website to know if the game runs or not in Linux</p>
      <table className="table">
        <thead>
          <tr>
            <th>Games</th>
            <th>Developer</th>
            <th>RunInLinux?</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Counter Strike: Global Offensive</td>
            <td>Valve Software</td>
            <td>✅</td>
          </tr>
          <tr>
            <td>League of Legends</td>
            <td>Riot Games</td>
            <td>✅</td>
          </tr>

          {/* ADD MORE GAMES HERE*/}
          {/* <tr>
            <td>Counter Strike: Global Offensive</td>
            <td>Valve Software</td>
            <td>✅</td>
          </tr> */}
        </tbody>
      </table>
    </HomeDetails>
  );
}

const HomeDetails = styled.div`
  img {
    width: 20%;
  }

  img,
  h2 {
    margin-bottom: -1.5rem;
  }

  table.table {
    width: 100%;
    background-color: #fff;
    border-collapse: collapse;
    border-width: 2px;
    border-color: #ffcc00;
    border-style: solid;
    color: #000000;
  }

  table.table td,
  table.table th {
    border-width: 2px;
    border-color: #181a1b;
    border-style: solid;
    padding: 1rem 5rem;
  }

  table.table thead {
    background-color: #7159c1;
    color: #fff;
  }
`;

export default App;
