create table users(
      id varchar primary key DEFAULT gen_random_uuid(),
      name varchar,
      password varchar,
      phone_number varchar unique,
      email varchar unique,
      created_at timestamp WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

create table initiatives(
      id varchar primary key DEFAULT gen_random_uuid(),
      name varchar,
      description varchar,
      images varchar[],
      created_at timestamp WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
      initiated_by varchar,
      CONSTRAINT fk_initiatives_initiated_by FOREIGN KEY(initiated_by) references users(id)
);

create table initiative_access(
      id varchar primary key DEFAULT gen_random_uuid(),
      access_to varchar,
      access_for varchar,
      role varchar,
      status varchar,
      last_update timestamp WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
      CONSTRAINT fk_initiative_access_access_to FOREIGN KEY(access_to) references users(id),
      CONSTRAINT fk_initiative_access_access_for FOREIGN KEY(access_for) references initiatives(id)
);

create table contributions(
      id varchar primary key DEFAULT gen_random_uuid(),
      contributed_by varchar,
      contributed_for varchar,
      title varchar,
      description varchar,
      images varchar[],
      posted_at timestamp WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,

      CONSTRAINT fk_contributions_contributed_by FOREIGN KEY(contributed_by) references users(id),
      CONSTRAINT fk_contributions_contributed_for FOREIGN KEY(contributed_for) references initiatives(id)
);

create table votes(
      id varchar primary key DEFAULT gen_random_uuid(),

      voted_for varchar,
      voted_by varchar,
      type varchar,
      voted_at timestamp WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,

      CONSTRAINT fk_votes_voted_for FOREIGN KEY(voted_for) references contributions(id),
      CONSTRAINT fk_votes_voted_by FOREIGN KEY(voted_by) references users(id)
);

create table comments(
      id varchar primary key DEFAULT gen_random_uuid(),

      commented_by varchar,
      commented_for varchar,
      comments varchar,
      voted_by varchar,
      commented_at timestamp WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,

      CONSTRAINT fk_comments_commented_for FOREIGN KEY(commented_for) references contributions(id),
      CONSTRAINT fk_comments_commented_by FOREIGN KEY(commented_by) references users(id)
);

