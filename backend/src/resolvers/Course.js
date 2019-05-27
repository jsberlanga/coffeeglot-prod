function createdBy(parent, args, ctx) {
  return ctx.prisma.course({ id: parent.id }).createdBy();
}

function usersEnrolled(parent, args, ctx) {
  return ctx.prisma.course({ id: parent.id }).usersEnrolled();
}

module.exports = {
  createdBy,
  usersEnrolled
};
