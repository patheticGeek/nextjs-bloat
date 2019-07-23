import React, { Component } from 'react';
import { withRouter } from 'next/router';
import Link from 'next/link';

class Index extends Component {
  static async getInitialProps({ query: { id } }) {
    return { id };
  }

  state = { btnLoading: false, darkMode: false };

  toggleDarkMode = () => {
    document.body.classList.toggle('dark');
    this.setState({ darkMode: !this.state.darkMode });
  };

  toggleBtnLoading = () => {
    this.setState({ btnLoading: !this.state.btnLoading });
  };

  render() {
    return (
      <main>
        <div className='content'>
          <h1>
            Hi from index.js<small>{this.props.id ? `, visited with id: ${this.props.id}.` : '.'}</small>
          </h1>
          <p>
            <Link href='/p/someid'>
              <a>Visit with id</a>
            </Link>
            <Link href='/about'>
              <a>About page</a>
            </Link>
          </p>
          <button className='btn ml-0' onClick={this.toggleDarkMode}>
            Dark mode
          </button>

          <section>
            <h1>Typography</h1>
            <div className='dp1'>This is a dp1 element</div>
            <div className='dp2'>This is a dp2 element</div>
            <div className='dp3'>This is a dp3 element</div>
            <div className='dp4'>This is a dp4 element</div>

            <h1>This is a h1 element</h1>
            <h2>This is a h2 element</h2>
            <h3>This is a h3 element</h3>
            <h4>This is a h4 element</h4>

            <p className='lead'>
              This is a lead. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta, iure voluptas!
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta, iure voluptas! At dignissimos
              ratione molestiae esse accusamus voluptate labore, quos molestias repudiandae! Necessitatibus
              cumque eius adipisci repudiandae deleniti quo harum!
            </p>

            <span className='text-muted'>Muted text here</span>
          </section>

          <section>
            <h1>Columns</h1>
            <div className='row mt-1'>
              <div className='col-50'>
                <div className='card'>
                  <div className='card-body'>
                    <p>.col-50</p>
                  </div>
                </div>
              </div>
              <div className='col-50'>
                <div className='card'>
                  <div className='card-body'>
                    <p>.col-50</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='row'>
              <div className='col-75'>
                <div className='card'>
                  <div className='card-body'>
                    <p>.col-75</p>
                  </div>
                </div>
              </div>
              <div className='col-25'>
                <div className='card'>
                  <div className='card-body'>
                    <p>.col-25</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='row'>
              <div className='col-66'>
                <div className='card'>
                  <div className='card-body'>
                    <p>.col-66</p>
                  </div>
                </div>
              </div>
              <div className='col-33'>
                <div className='card'>
                  <div className='card-body'>
                    <p>.col-33</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h1>Buttons</h1>
            <button className='btn'>Default</button>
            <button className='btn neutral'>Neutral</button>
            <button className='btn success'>Success</button>
            <button className='btn danger'>Danger</button>
            <button className='btn warning'>Warning</button>
            <button className='btn minimal'>Minimal</button>
            <button className='btn' disabled>
              Disabled
            </button>
            <br />
            <span className='h3'>Loading state: </span>
            <button
              className={`btn ${this.state.btnLoading ? ' loading' : null}`}
              onClick={this.toggleBtnLoading}
            >
              Click here
            </button>
          </section>

          <section>
            <h1>Icon buttons</h1>

            <button className='btn'>
              <span className='btn-icon'>
                <i className='fab fa-facebook' />
              </span>
              <span className='btn-text'>Facebook</span>
            </button>

            <button className='btn icon-only'>
              <span className='btn-icon'>
                <i className='fab fa-facebook' />
              </span>
            </button>

            <button className='btn icon-only rounded-circle'>
              <span className='btn-icon'>
                <i className='fab fa-facebook' />
              </span>
            </button>
          </section>

          <section>
            <h1>Small buttons</h1>
            <button className='btn sm'>Default</button>
            <button className='btn sm neutral'>Neutral</button>
            <button className='btn sm success'>Success</button>
            <button className='btn sm danger'>Danger</button>
            <button className='btn sm warning'>Warning</button>
            <button className='btn sm minimal'>Minimal</button>
            <button className='btn sm' disabled>
              Disabled
            </button>
            <br />
            <span className='h3'>Loading state: </span>
            <button
              className={`btn sm ${this.state.btnLoading ? ' loading' : null}`}
              onClick={this.toggleBtnLoading}
            >
              Click here
            </button>
          </section>

          <section>
            <h1>Forms</h1>
            <h2>Inputs</h2>
            <div className='row'>
              <div className='form-group col-sm col-50'>
                <input className='form-control' type='email' placeholder='yourname@example.com' />
              </div>
              <div className='form-group col-sm col-50'>
                <input className='form-control' type='email' placeholder='Disabled input' disabled />
              </div>
            </div>

            <div className='row'>
              <div className='form-group col-sm col-50'>
                <input
                  className='form-control icon-left icon-success'
                  type='email'
                  placeholder='With a left icon'
                />
              </div>
              <div className='form-group col-sm col-50'>
                <input
                  className='form-control icon-right icon-success'
                  type='email'
                  placeholder='With a right icon'
                />
              </div>
            </div>

            <div className='row'>
              <div className='form-group col-sm col-50'>
                <input className='form-control error' type='email' placeholder='Error input' />
              </div>
              <div className='form-group col-sm col-50'>
                <input className='form-control success' type='email' placeholder='Success input' />
              </div>
            </div>

            <div className='row'>
              <div className='col-sm col-50'>
                <textarea className='form-control' rows='3' placeholder='Write a large text here ...' />
              </div>
            </div>

            <h2 className='mt-1'>Checkboxes</h2>

            <div className='row'>
              <div className='form-group col-sm col-50'>
                <input type='checkbox' id='checkbox1' />
                <label htmlFor='checkbox1' className='custom-checkbox'>
                  Checkbox
                </label>
              </div>
              <div className='form-group col-sm col-50'>
                <input type='checkbox' id='checkbox2' defaultChecked />
                <label htmlFor='checkbox2' className='custom-checkbox'>
                  Checkbox
                </label>
              </div>
            </div>

            <div className='row'>
              <div className='form-group col-sm col-50'>
                <input type='checkbox' id='checkbox3' disabled />
                <label htmlFor='checkbox3' className='custom-checkbox'>
                  Checkbox
                </label>
              </div>
              <div className='form-group col-sm col-50'>
                <input type='checkbox' id='checkbox4' disabled defaultChecked />
                <label htmlFor='checkbox4' className='custom-checkbox'>
                  Checkbox
                </label>
              </div>
            </div>

            <h2 className='mt-1'>Radio buttons</h2>

            <div className='row'>
              <div className='form-group col-sm col-50'>
                <input name='custom-radio' type='radio' id='radio1' />
                <label htmlFor='radio1' className='custom-radio'>
                  Radio button
                </label>
              </div>

              <div className='form-group col-sm col-50'>
                <input name='custom-radio' type='radio' id='radio2' />
                <label htmlFor='radio2' className='custom-radio'>
                  Radio button
                </label>
              </div>
            </div>

            <div className='row'>
              <div className='form-group col-sm col-50'>
                <input name='custom-radio' type='radio' id='radio3' disabled />
                <label htmlFor='radio3' className='custom-radio'>
                  Radio button
                </label>
              </div>

              <div className='form-group col-sm col-50'>
                <input name='custom-radio' type='radio' id='radio4' disabled defaultChecked />
                <label htmlFor='radio4' className='custom-radio'>
                  Radio button
                </label>
              </div>
            </div>

            <h2 className='mt-1'>Toogle</h2>
            <div className='row'>
              <div className='col-sm col-50'>
                <div className='form-group'>
                  <label className='custom-toggle' htmlFor='toggle4'>
                    <input type='checkbox' id='toggle4' className='custom' />
                    <span className='custom-toggle-slider' />
                  </label>
                </div>
              </div>

              <div className='col-sm col-50'>
                <div className='form-group'>
                  <label className='custom-toggle' htmlFor='toggle3'>
                    <input type='checkbox' id='toggle3' className='custom' defaultChecked />
                    <span className='custom-toggle-slider' />
                  </label>
                </div>
              </div>
            </div>

            <div className='row'>
              <div className='col-sm col-50'>
                <div className='form-group'>
                  <label className='custom-toggle' htmlFor='toggle2'>
                    <input type='checkbox' id='toggle2' className='custom' />
                    <span className='custom-toggle-slider' data-on='Yes' data-off='No' />
                  </label>
                </div>
              </div>

              <div className='col-sm col-50'>
                <div className='form-group'>
                  <label className='custom-toggle' htmlFor='toggle1'>
                    <input type='checkbox' id='toggle1' className='custom' defaultChecked />
                    <span className='custom-toggle-slider' data-on='Yes' data-off='No' />
                  </label>
                </div>
              </div>
            </div>

            <h2 className='mt-1'>Loading</h2>
            <div className='row'>
              <div className='col-sm col-25'>
                <div className='loading'>
                  <div />
                  <div />
                  <div />
                </div>
              </div>
            </div>
          </section>

          <section>
            <h1>Cards</h1>
            <div className='row mt-1'>
              <div className='col-sm col-33'>
                <div className='card'>
                  <img
                    className='card-image-top'
                    src='https://1si.org/app/uploads/2016/01/banner-placeholder.jpg'
                    alt='Card image placeholder'
                  />
                  <div className='list-group'>
                    <div className='list-item'>Something comes here</div>
                    <div className='list-item'>Something comes here</div>
                    <div className='list-item'>Something comes here</div>
                    <div className='list-item'>Something comes here</div>
                  </div>
                  <div className='card-body'>
                    <h2 className='card-title'>Card title</h2>
                    <p className='card-text'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, officia similique
                      amet minima eveniet ducimus provident. Quis ducimus, incidunt repellat ullam ratione ea
                      earum facilis. Deserunt harum illum nihil sapienterrore.
                    </p>
                  </div>
                </div>

                <div className='card'>
                  <img
                    className='card-image-top'
                    src='https://1si.org/app/uploads/2016/01/banner-placeholder.jpg'
                    alt='Card image placeholder'
                  />
                  <div className='card-body'>
                    <h2 className='card-title'>Card title</h2>
                    <p className='card-text'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, officia similique
                      amet minima eveniet ducimus provident. Quis ducimus, incidunt repellat ullam ratione ea
                      earum facilis. Deserunt harum illum nihil sapienterrore.
                    </p>
                  </div>
                </div>

                <div className='card bg-default text-white'>
                  <div className='card-body'>
                    <h2 className='card-title'>Testimonial</h2>
                    <blockquote>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
                      </p>
                      <footer className='text-danger'>
                        Someone famous in <cite title='Source Title'>Source Title</cite>
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </div>

              <div className='col-33 col-sm'>
                <div
                  className='card text-black'
                  style={{
                    backgroundImage: 'url(https://1si.org/app/uploads/2016/01/banner-placeholder.jpg)'
                  }}
                >
                  <div className='card-body'>
                    <h2 className='card-title'>Card with image background</h2>
                    <p className='card-text'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, officia similique
                      amet minima eveniet ducimus provident. Quis ducimus, incidunt repellat ullam ratione ea
                      earum facilis. Deserunt harum illum nihil sapiente.
                    </p>
                  </div>
                </div>
                <div className='card'>
                  <div className='card-body'>
                    <h1 className='mb-0'>Card title comes here</h1>
                    <small className='text-sm text-muted'>by @pathetic_geek</small>
                    <p className='mt-1'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quae ratione animi
                      laborum veniam cumque corrupti, officiis soluta, tenetur a, nulla corporis accusantium
                      accusamus enim! Odit voluptatum temporibus quibusdam eligendi.
                    </p>
                    <a href='#' className='text-warning ml-0'>
                      Take a look
                    </a>
                  </div>
                </div>
                <div className='card'>
                  <div className='card-header'>
                    <h2 className='mb-0'>Card with list</h2>
                  </div>
                  <div className='list-group'>
                    <div className='list-item'>Something comes here</div>
                    <div className='list-item'>Something comes here</div>
                    <div className='list-item'>Something comes here</div>
                    <div className='list-item'>Something comes here</div>
                  </div>
                </div>

                <div className='card bg-gradient-success text-white'>
                  <div className='card-header'>
                    <h2 className='text-uppercase text-center pv-1'>Bravo Plan</h2>
                  </div>
                  <div className='card-body text-center pv-1'>
                    <div className='dp2'>$49</div>
                    <span className='text-sm text-400'>per application</span>
                    <ul>
                      <li>
                        <span className='icon rounded-circle bg-white text-muted icon-sm mr-1'>
                          <i className='fas fa-terminal' />
                        </span>
                        Complete Documentation
                      </li>
                      <li>
                        <span className='icon rounded-circle bg-white text-muted icon-sm mr-1'>
                          <i className='fas fa-pen-fancy' />
                        </span>
                        Working materials in Sketch
                      </li>
                      <li>
                        <span className='icon rounded-circle bg-white text-muted icon-sm mr-1'>
                          <i className='fas fa-hdd' />
                        </span>
                        2Gb cloud storage
                      </li>
                    </ul>
                    <button className='btn neutral mv-1'>Start free trial</button>
                  </div>
                  <div className='card-footer text-center'>
                    <a href='#' className='text-400 text-white'>
                      Request a demo
                    </a>
                  </div>
                </div>
              </div>

              <div className='col-sm col-33'>
                <div className='card'>
                  <div className='card-header'>
                    <h2 className='text-uppercase text-primary text-center pv-1'>Bravo Plan</h2>
                  </div>
                  <div className='card-body text-center pv-1'>
                    <div className='dp2'>$49</div>
                    <span className='text-sm text-400 text-muted'>per application</span>
                    <ul>
                      <li>
                        <span className='icon rounded-circle bg-primary text-white icon-sm mr-1'>
                          <i className='fas fa-terminal' />
                        </span>
                        Complete Documentation
                      </li>
                      <li>
                        <span className='icon rounded-circle bg-primary text-white icon-sm mr-1'>
                          <i className='fas fa-pen-fancy' />
                        </span>
                        Working materials in Sketch
                      </li>
                      <li>
                        <span className='icon rounded-circle bg-primary text-white icon-sm mr-1'>
                          <i className='fas fa-hdd' />
                        </span>
                        2Gb cloud storage
                      </li>
                    </ul>
                    <button className='btn mv-1'>Start free trial</button>
                  </div>
                  <div className='card-footer text-center'>
                    <a href='#' className='text-400 text-color'>
                      Request a demo
                    </a>
                  </div>
                </div>

                <div className='card'>
                  <div className='card-header'>
                    <div className='row'>
                      <div className='col'>
                        <h2>Card action</h2>
                      </div>
                      <div className='col-auto'>
                        <button className='btn sm neutral text-primary mt-0 mb-0'>Action</button>
                      </div>
                    </div>
                  </div>
                  <div className='card-body'>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti tenetur omnis
                      praesentium ea quidem iure reiciendis sunt animi nam esse enim exercitationem corporis
                      harum, amet ullam, error soluta voluptatem eius.
                    </p>
                    <button className='btn card-button ml-0'>Go somewhere</button>
                  </div>
                </div>

                <div className='card'>
                  <div className='card-body'>
                    <div className='row'>
                      <div className='col-auto d-flex'>
                        <a href='#' className='mt-auto mb-auto'>
                          <img
                            alt='Image placeholder'
                            className='avatar avatar-lg rounded-circle'
                            src={require('../assets/avatar.jpg')}
                          />
                        </a>
                      </div>
                      <div className='col pr-0 pl-0'>
                        <h3 className='mb-0'>{`<pathetic_geek />`}</h3>
                        <small className='text-muted'>Personal blog</small>
                        <br />
                        <span className='text-success text-sm'>
                          <span className='icon icon-sm'>
                            <i className='fas fa-circle' />
                          </span>
                          Active now
                        </span>
                      </div>
                      <div className='col-auto d-flex'>
                        <button className='btn sm neutral mt-auto mb-auto'>Add</button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='card'>
                  <div className='card-body d-flex-column align-items-center'>
                    <a href='#' className='mb-1'>
                      <img
                        src={require('../assets/avatar.jpg')}
                        alt='Profile pic'
                        className='avatar avatar-xl rounded-circle'
                        style={{ width: '100px', height: '100px' }}
                      />
                    </a>
                    <div className='dp4'>Shivam Nagi</div>
                    <small>Full-stack developer</small>
                    <div className='d-flex align-items-center mt-1'>
                      <button className='btn bg-gradient-red icon-only rounded-circle no-border'>
                        <span className='btn-icon'>
                          <i className='fab fa-instagram' />
                        </span>
                      </button>
                      <button className='btn bg-primary icon-only rounded-circle no-border'>
                        <span className='btn-icon'>
                          <i className='fab fa-facebook' />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='row'>
              <div className='col-sm col-25'>
                <div className='card card-stats lift-hover'>
                  <div className='card-body'>
                    <div className='row'>
                      <div className='col'>
                        <small className='text-uppercase text-600 text-muted'>Total Visits</small>
                        <h2>637,895</h2>
                      </div>
                      <div className='col-auto'>
                        <span className='bg-gradient-red icon rounded-circle text-white'>
                          <i className='fas fa-hand-point-up' />
                        </span>
                      </div>
                    </div>
                    <p className='mt-1 mb-0 text-sm'>
                      <span className='text-success mr-05'>
                        <i className='fas fa-arrow-up' />
                        {' 3.58%'}
                      </span>
                      <span>Since last month</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className='col-sm col-25'>
                <div className='card card-stats lift-hover'>
                  <div className='card-body'>
                    <div className='row'>
                      <div className='col'>
                        <small className='text-uppercase text-600 text-muted'>New users</small>
                        <h2>2,794</h2>
                      </div>
                      <div className='col-auto'>
                        <span className='bg-gradient-orange icon rounded-circle text-white'>
                          <i className='fas fa-chart-pie' />
                        </span>
                      </div>
                    </div>
                    <p className='mt-1 mb-0 text-sm'>
                      <span className='text-success mr-05'>
                        <i className='fas fa-arrow-up' />
                        {' 3.58%'}
                      </span>
                      <span>Since last month</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className='col-sm col-25'>
                <div className='card card-stats lift-hover'>
                  <div className='card-body'>
                    <div className='row'>
                      <div className='col'>
                        <small className='text-uppercase text-600 text-muted'>Sales</small>
                        <h2>57,936</h2>
                      </div>
                      <div className='col-auto'>
                        <span className='bg-gradient-green icon rounded-circle text-white'>
                          <i className='fas fa-dollar-sign' />
                        </span>
                      </div>
                    </div>
                    <p className='mt-1 mb-0 text-sm'>
                      <span className='text-success mr-05'>
                        <i className='fas fa-arrow-up' />
                        {' 3.58%'}
                      </span>
                      <span>Since last month</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className='col-sm col-25'>
                <div className='card card-stats lift-hover'>
                  <div className='card-body'>
                    <div className='row'>
                      <div className='col'>
                        <small className='text-uppercase text-600 text-muted'>Performance</small>
                        <h2>48.67%</h2>
                      </div>
                      <div className='col-auto'>
                        <span className='bg-gradient-info icon rounded-circle text-white'>
                          <i className='fas fa-database' />
                        </span>
                      </div>
                    </div>
                    <p className='mt-1 mb-0 text-sm'>
                      <span className='text-success mr-05'>
                        <i className='fas fa-arrow-up' />
                        {' 3.58%'}
                      </span>
                      <span>Since last month</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h1>Badges</h1>
            <span className='badge'>Default</span>
            <span className='badge neutral'>Neutral</span>
            <span className='badge success'>Success</span>
            <span className='badge danger'>Danger</span>
            <span className='badge warning'>Warning</span>
          </section>

          <section>
            <h1>Alerts</h1>
            <div className='alert default' role='alert'>
              <strong>Default!</strong> This is a default alert—check it out!
            </div>
            <div className='alert success' role='alert'>
              <strong>Success!</strong> This is a success alert—check it out!
            </div>
            <div className='alert danger' role='alert'>
              <strong>Danger!</strong> This is a danger alert—check it out!
            </div>
            <div className='alert warning' role='alert'>
              <strong>Warning!</strong> This is a warning alert—check it out!
            </div>
          </section>

          <section>
            <h1>Pagination</h1>
            <ul className='pagination'>
              <li className='disabled'>
                <a href='#'>{'<'}</a>
              </li>
              <li>
                <a href='#'>1</a>
              </li>
              <li className='active'>
                <a href='#'>2</a>
              </li>
              <li>
                <a href='#'>3</a>
              </li>
              <li className='disabled'>
                <a href='#'>{'>'}</a>
              </li>
            </ul>
          </section>
        </div>
      </main>
    );
  }
}

export default withRouter(Index);
