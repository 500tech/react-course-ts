import runAll from './es6';

class User {
  constructor({ fullName, company }) {
    this.fullName = fullName;
    this.company = company;
  }

  _getBaseUsername() {
    return this.fullName.replace(/ /g, '').replace('.', '');
  }

  getCompanyEmail(companyUsers) {
    const base = this._getBaseUsername();
    const normalisedCompany = this.company.replace(/ /g, '');
    const similarNames = companyUsers.filter(
      user => user._getBaseUsername() === base
    );
    const suffix = similarNames.length === 0 ? '' : similarNames.length;
    return `${base}${suffix}@${normalisedCompany}.com`;
  }
}

runAll();

const user = new User({ fullName: 'John F. Kennedy', company: 'White House' });
console.log(
  user.getCompanyEmail([
    new User({ fullName: 'John F. Kennedy', company: 'White House' }),
    new User({ fullName: 'John III F. Kennedy', company: 'White House' }),
    new User({ fullName: 'Johnny Kennedy', company: 'White House' }),
  ])
);
