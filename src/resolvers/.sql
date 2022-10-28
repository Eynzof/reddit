select
    p.*,
    json_build_object(
        'id',
        u.id,
        'username',
        u.username,
        'email',
        u.email
    ) creator
from
    post p
    inner join public.user u on u.id = p."creatorId"
where
    p."createdAt" between '1970-01-01T00:00:02.022Z'
    and '2022-10-01T00:00:02.022Z'
order by
    p."createdAt" DESC
limit
    10