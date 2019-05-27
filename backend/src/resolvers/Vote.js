function teacher(parent, args, ctx) {
  return ctx.prisma.vote({ id: parent.id }).teacher();
}

function user(parent, args, ctx) {
  return ctx.prisma.vote({ id: parent.id }).user();
}

module.exports = {
  teacher,
  user
};
