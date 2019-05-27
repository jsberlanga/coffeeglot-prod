function course(parent, args, ctx) {
  return ctx.prisma.enrollment({ id: parent.id }).course();
}

function user(parent, args, ctx) {
  return ctx.prisma.enrollment({ id: parent.id }).user();
}

module.exports = {
  course,
  user
};
