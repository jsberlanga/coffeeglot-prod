function createdBy(parent, args, ctx) {
  return ctx.prisma.teacher({ id: parent.id }).createdBy();
}

function votes(parent, args, ctx) {
  return ctx.prisma.teacher({ id: parent.id }).votes();
}

module.exports = {
  createdBy,
  votes
};
