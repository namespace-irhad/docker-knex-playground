const { Model } = require('objection');

class User extends Model {
  // Table name is the only required property.
  static get tableName() {
    return 'user';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['username', 'email', 'password'],

      properties: {
        id: { type: 'integer' },
        username: { type: 'string', minLength: 5 },
        email: { type: 'string', minLength: 5 },
        password: { type: 'string' },
      },
    };
  }
}

module.exports = User;
