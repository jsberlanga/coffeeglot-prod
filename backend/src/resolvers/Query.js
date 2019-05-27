async function users(parent, args, ctx, info) {
  const users = await ctx.prisma.users();
  return users;
}

async function getUser(parent, args, ctx, info) {
  const user = await ctx.prisma.user({ id: args.id });
  return user;
}

async function courses(parent, args, ctx, info) {
  const courses = await ctx.prisma.courses({
    where: {
      OR: [{ language_contains: args.filter }, { title_contains: args.filter }]
    },
    orderBy: args.orderBy
  });
  return courses;
}

async function getCourse(parent, args, ctx, info) {
  const course = await ctx.prisma.course({ id: args.id });
  return course;
}

async function teachers(parent, args, ctx, info) {
  const teachers = await ctx.prisma.teachers({
    orderBy: args.orderBy
  });
  return teachers;
}

function me(parent, args, ctx, info) {
  if (!ctx.request.userId) {
    return null;
  }
  return ctx.prisma.user({ id: ctx.request.userId }, info);
}

module.exports = {
  users,
  getUser,
  courses,
  getCourse,
  teachers,
  me
};
