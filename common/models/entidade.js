'use strict';

module.exports = function(entidade) {
/*..
  Model.findById({include:['tipoPessoa']}, function(data) {
     console.log(data);
  });

  Book.observe('access', function logQuery(ctx, next) {
    ctx.query.where.id = 2; // changing filter value for where
  console.log('Accessing %s matching %j', ctx.Model.ModelName, ctx.query.where);
  next();
});

module.exports = function(User) {
  User.afterRemote('*', function(ctx, user, next) {
    User.include(user, 'group', next);
  });
};
  entidade.afterRemote ('**', function (context, modelInstance, next) {
    let ownerId = context.result.ownerId;
    entidade.find({include:['tipoPessoa','tipoEntidade','users']}, function(err, owner) {
      let ownerId = context.result.ownerId;
      next();
    });
  });

*/
  entidade.observer('before save', function(ctx, next) {
    
    // ctx.instance.dtcadastro = now();
    console.log('now.toJSON(): ', ctx.instance.dtcadastro);
    console.log('now(): ', now());
    console.log('now.toJSON(): ', now.toJSON());
    
    next();
  });


  entidade.beforeRemote('**', function(ctx, unused, next) {
    if (ctx.args.filter === undefined) ctx.args.filter = {};
    if (ctx.args.filter.include === undefined) ctx.args.filter.include = [];
    ctx.args.filter.include.push('tipoPessoa');
    ctx.args.filter.include.push('tipoEntidade');

    //console.log('Accessing %s matching %j', 'entidade', ctx.args.filter);

    next();
  });

};
