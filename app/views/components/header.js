import _ from 'lodash';
import React from 'react/addons';
import Gravatar from './gravatar';
import {Link, Navigation} from 'react-router';

const ACCOUNT_SETTINGS = [
  'Profile', 'Plan', 'Billing', 'Invoices', 'Products', 'Members', 'Notifications', 'Services'
];

var Header = React.createClass({

  mixins: [Navigation],

  propTypes: {
    product: React.PropTypes.object,
    allProducts: React.PropTypes.array,
    user: React.PropTypes.object
  },

  getInitialState() {
    return {
      scoped: true
    }
  },

  getDefaultProps() {
    return {
      searchBar: true,
      product: {
        name: 'Choose a Product'
      }
    }
  },

  search(ev) {
    ev.preventDefault();
    let value = this.refs.search.getDOMNode().value;
    if (this.props.product.id && this.state.scoped) {
      value = `product:${this.props.product.id} ${value}`;
    }
    let url = `/search?q=${encodeURIComponent(value)}`;
    this.transitionTo(url);
  },

  onKeyDown(ev) {
    if (ev.keyCode === 8 && ev.target.value === '') {
      this.setState({ scoped: false });
    }
  },

  renderSearch() {
    let scope = '';
    if (this.props.product.id && this.state.scoped) {
      scope = <span className="header-search__scope label label-info">{this.props.product.name}</span>
    }
    return (
      <form className="navbar-form navbar-right header-search" onSubmit={this.search} role="search">
        <div className="form-group">
          {scope}
            <input className="form-control" type="search" name="q" placeholder="Search" ref="search" onKeyDown={this.onKeyDown} />
        </div>
        <input type="submit" className="hidden" />
      </form>
    );
  },

  render() {
    return (
      <header className="product__header container-fluid">
          <svg className="running-man" xmlns="http://www.w3.org/2000/svg" version="1.1" id="Layer_1" x="0px" y="0px" width="33px" height="37px" viewBox="0 0 20 22" enable-background="new 0 0 20 22">
            <path d="M18.879 5.285c-0.144 0.074-0.467 1.107-0.969 2 c-0.437 0.742-1.089 1.31-1.31 1.199c-1.416-0.844-1.903-1.267-2.112-1.546c-0.035 0.012-0.073 0.018-0.112 0 c-0.052 0.421-0.281 1.467-1.055 2.938c-0.23 0.437-0.371 0.961-0.354 1.299c1.87 0.5 3.8 2.5 3.9 2.9 c0.13 0.4-0.248 1.082-0.338 1.249c-0.09 0.167-2.783 3.571-3 3.851c-0.165 0.297-0.071 0.485-0.011 0.6 c0.252 0.7 1.2 1 1.4 1.401c0.066 0.141-0.33 0.303-0.942 0.218c-0.176-0.024-0.993-0.291-1.448-0.944 c-0.195-0.28-0.607-0.314-0.66-0.653c-0.061-0.393 0.252-0.561 0.377-0.629c0.125-0.068 0.219-0.129 0.496-0.528 c0.811-1.651 0.794-2.96 2.035-3.826c-0.001-0.035-0.03-0.064 0.008-0.118c-2.13-0.318-2.717-0.871-3.038-1.139 c-1.432 2.064-3.245 3.069-3.524 3.357c-0.212 0.39-0.646 0.588-0.944 0.579c-0.845 0.144-3.809 1.061-4.533 1.5 c-0.724 0.398-0.619 0.385-0.866 0.584c-0.278 0.232-0.434 0.437-0.564 0.956c-0.209 0.319-0.066 0.748-0.186 0.9 c-0.097 0.125-0.287 0.076-0.399-0.053c-0.29-0.565-0.204-1.26 0.053-1.772c0.371-0.742-0.128-0.807 0.278-1.454 c0.062-0.098 0.327-0.223 0.616-0.106c0.215 0.1 0.5 0.1 0.5 0.101s0.275-0.061 0.615-0.231 c2.595-2.209 3.647-1.858 4.188-1.87c0.441-0.877 0.829-2.273 2.019-3.387c0.145-0.718 0.319-1.51 1.173-2.078 c0.112-0.074 0.373-0.548 0.167-2.664c-0.062-0.645-0.047-1.091 0.024-1.456c-0.034-0.031-0.062-0.068-0.083-0.107 c-0.044 0.055-0.094 0.162-0.149 0.201C9.802 6.8 9.2 6.9 8.6 7.149C8.503 7.2 8.5 7.2 8.5 7.3 C8.63 8.6 8.3 8.5 8.3 9.517C8.388 9.8 8.4 9.9 8.4 10.025c0 0 0.2 0.2 0.2 0.3 c0.077 0.267-0.025 0.3 0 0.395c0.035 0.1 0.1 0.3 0 0.389c-0.095 0.158-0.806 0.159-1.126 0 c-0.06-0.066-0.136-0.548-0.085-0.869c0.018-0.116 0.129-0.28 0.112-0.39C7.454 8.7 7.3 7 7.6 6.2 c0.077-0.141 0.329-0.257 0.443-0.342c0.624-0.472 1.479-0.79 2.258-1.593c0.567-0.585 1.559-0.431 1.815-0.438 c0.542-0.27 0.339-0.562 0.314-0.745c-0.05-0.364-0.694-0.55-0.481-1.651c0.155-0.804 1.188-1.109 1.993-0.797 c0.81 0.3 0.8 1 0.8 1.103c-0.038 0.167-0.042 0.387-0.048 0.438c0.049 0.2 0.2 0.4 0.2 0.6 c-0.007 0.075-0.207 0.018-0.225 0.093c-0.024 0.1 0 0.607-0.025 0.71c-0.044 0.169-0.642 0.071-0.642 0.1 s-0.071 0.371-0.063 0.569c0.745 0.3 1.1 0.6 1.3 1.024c0.277 0.5 1 0.6 1.5 1.8 c0.414-0.892 0.9-1.147 1.413-2.095c0.05-0.093-0.281-0.754-0.053-0.815c0.365-0.098 0.352-0.717 0.74-0.493 c0.561 0.3 0.6 0.6 0.6 0.896C19.5 4.8 19 5.2 18.9 5.285z" className="running-man-svg"/>
          </svg>
          <nav className="product__dropdown">
            <h1>{this.props.product.name}<span className="glyphicon glyphicon-menu-down"/></h1>
            <ul>
            {_.map(this.props.allProducts, function(product) {
              return (
                <li key={`product-menu-${product.name}`}><Link to="product" params={{ id: product.id }}>{product.name}</Link></li>
              )
            })}
            </ul>
          </nav>
          <nav className="product__dropdown product__account">
            <button className="btn btn-default dropdown-toggle">
              <Gravatar email={this.props.user.get('email')} className="img-rounded" size={26} />
              <span className="product__account-name">{this.props.user.get('first_name')}</span>
              <span className="glyphicon glyphicon-menu-down"/>
            </button>
            <ul>
              {_.map(ACCOUNT_SETTINGS, function(setting, index) {
                return <li key={index}><a href={`https://sprint.ly/account/settings/${setting.toLowerCase()}`}>{setting}</a></li>
              })}
              <li className="logout">
                <a href="https://sprint.ly/logout" className="btn btn-danger btn-sm btn-block">Logout</a>
              </li>
            </ul>
          </nav>
          {this.props.searchBar ? this.renderSearch() : ''}
        </header>
    );
  }
});

export default Header;