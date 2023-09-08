export default function Table() {
  return (
    <div>
      <table class="table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Stack</th>
            <th scope="col">Description</th>
            <th scope="col">Github</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>MAMP</td>
            <td>Halifax Kayak Club, book your trip, session managment.</td>
            <td>
              <a href="https://github.com/quackness/Halifax-Canoe-and-Kayak">
                <i className="icon-link"></i>
              </a>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>PERN</td>
            <td>Movies CRUD app</td>
            <td>
              <a href="https://github.com/quackness/Movies">
                <i className="icon-link"></i>
              </a>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>React and atomic CSS</td>
            <td>Store page with search bar and filters.</td>
            <td>
              <a href="https://github.com/quackness/filter-images">
                <i className="icon-link"></i>
              </a>
            </td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Vue router</td>
            <td>Web site with exotic destinations.</td>
            <td>
              <a href="https://github.com/quackness/vue-router">
                <i className="icon-link"></i>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
