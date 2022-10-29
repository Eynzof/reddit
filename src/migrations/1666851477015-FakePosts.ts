import { MigrationInterface, QueryRunner } from 'typeorm';

export class FakePosts1666851477015 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
//     await queryRunner.query(`insert into Post (title, text, "creatorId", "createdAt") values ('Planet Terror', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', 1, '2022-01-26T01:49:11Z');
// insert into Post (title, text, "creatorId", "createdAt") values ('Cherry', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.

// Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.

// Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', 1, '2022-05-22T22:33:51Z');
// insert into Post (title, text, "creatorId", "createdAt") values ('Pandora''s Box (Büchse der Pandora, Die)', 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', 1, '2022-05-24T01:48:10Z');
// insert into Post (title, text, "creatorId", "createdAt") values ('Glenn Miller Story, The', 'In congue. Etiam justo. Etiam pretium iaculis justo.

// In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.

// Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', 1, '2022-06-14T04:11:59Z');
// insert into Post (title, text, "creatorId", "createdAt") values ('Dark Half, The', 'Fusce consequat. Nulla nisl. Nunc nisl.

// Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.

// In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', 1, '2022-05-10T08:39:21Z');
// insert into Post (title, text, "creatorId", "createdAt") values ('Elephant Boy', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.

// Fusce consequat. Nulla nisl. Nunc nisl.', 1, '2022-08-10T02:13:27Z');
// insert into Post (title, text, "creatorId", "createdAt") values ('Polly of the Circus', 'In congue. Etiam justo. Etiam pretium iaculis justo.', 1, '2022-02-11T22:57:03Z');
// insert into Post (title, text, "creatorId", "createdAt") values ('Jaguar', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.

// Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', 1, '2022-01-15T14:53:00Z');
// insert into Post (title, text, "creatorId", "createdAt") values ('Kevin Smith: Too Fat For 40', 'Phasellus in felis. Donec semper sapien a libero. Nam dui.

// Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', 1, '2022-01-28T22:54:23Z');
// insert into Post (title, text, "creatorId", "createdAt") values ('Altman', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.

// Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', 1, '2022-04-18T12:41:06Z');
// insert into Post (title, text, "creatorId", "createdAt") values ('Silent Night, Bloody Night', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', 1, '2022-06-25T09:09:38Z');
// insert into Post (title, text, "creatorId", "createdAt") values ('Scorpion King 3: Battle for Redemption, The', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.

// Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', 1, '2021-12-03T03:31:37Z');
// insert into Post (title, text, "creatorId", "createdAt") values ('Babes on Broadway', 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.

// Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

// Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', 1, '2022-05-11T14:00:38Z');
// insert into Post (title, text, "creatorId", "createdAt") values ('Enola Gay and the Atomic Bombing of Japan', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.

// Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', 1, '2022-06-25T01:34:19Z');
// insert into Post (title, text, "creatorId", "createdAt") values ('Metal Brothers (Mammas pojkar)', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', 1, '2021-11-04T12:15:41Z');
// insert into Post (title, text, "creatorId", "createdAt") values ('Sharknado', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.

// Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.

// Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', 1, '2021-11-23T22:20:28Z');
// insert into Post (title, text, "creatorId", "createdAt") values ('''burbs, The', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.

// Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', 1, '2022-06-18T17:48:12Z');
// insert into Post (title, text, "creatorId", "createdAt") values ('Xtro 3: Watch the Skies', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', 1, '2021-10-28T21:32:09Z');
// insert into Post (title, text, "creatorId", "createdAt") values ('Stephen Fry In America - New World', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

// Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.

// Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', 1, '2022-03-27T00:44:42Z');
// insert into Post (title, text, "creatorId", "createdAt") values ('Dreamchild', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.

// Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', 1, '2022-09-30T18:31:38Z');
// insert into Post (title, text, "creatorId", "createdAt") values ('Sapphires, The', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 1, '2022-02-28T13:53:53Z');
// insert into Post (title, text, "creatorId", "createdAt") values ('Green Man, The', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 1, '2021-12-18T07:03:36Z');
// insert into Post (title, text, "creatorId", "createdAt") values ('Green Hornet, The', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

// Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.

// Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', 1, '2022-01-23T14:22:00Z');
// insert into Post (title, text, "creatorId", "createdAt") values ('I Met Him in Paris', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.

// Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', 1, '2022-09-29T19:34:02Z');
// insert into Post (title, text, "creatorId", "createdAt") values ('Arnulf Rainer', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.

// Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.

// Fusce consequat. Nulla nisl. Nunc nisl.', 1, '2022-07-23T12:17:22Z');
// insert into Post (title, text, "creatorId", "createdAt") values ('Big Hit, The', 'Phasellus in felis. Donec semper sapien a libero. Nam dui.

// Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', 1, '2022-05-20T22:47:50Z');
// insert into Post (title, text, "creatorId", "createdAt") values ('Kisses for My President', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

// Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.

// Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', 1, '2021-12-03T15:46:49Z');
// insert into Post (title, text, "creatorId", "createdAt") values ('Best Worst Movie', 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.

// Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', 1, '2021-11-25T20:00:26Z');
// insert into Post (title, text, "creatorId", "createdAt") values ('Doppelganger', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.

// In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', 1, '2022-07-03T08:58:41Z');
// insert into Post (title, text, "creatorId", "createdAt") values ('Hardware', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.

// Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

// Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 1, '2022-02-10T23:24:54Z');
// insert into Post (title, text, "creatorId", "createdAt") values ('Beyond the Border', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.

// Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.

// Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', 1, '2022-05-23T17:04:35Z');
// insert into Post (title, text, "creatorId", "createdAt") values ('Not Another Teen Movie', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.

// Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.

// Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', 1, '2022-07-12T01:11:23Z');
// insert into Post (title, text, "creatorId", "createdAt") values ('Ambush (Rukajärven tie)', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', 1, '2022-01-05T06:17:12Z');
// insert into Post (title, text, "creatorId", "createdAt") values ('Look Who''s Talking', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

// Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 1, '2022-07-02T00:21:21Z');
// insert into Post (title, text, "creatorId", "createdAt") values ('Love in the Time of Hysteria (Sólo con tu pareja)', 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.

// Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', 1, '2021-11-27T04:27:04Z');
// insert into Post (title, text, "creatorId", "createdAt") values ('Barbarian Queen', 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', 1, '2022-07-11T09:22:11Z');
// insert into Post (title, text, "creatorId", "createdAt") values ('Monkey in Winter, A (Un singe en hiver)', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.

// Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', 1, '2022-09-10T00:13:20Z');
// insert into Post (title, text, "creatorId", "createdAt") values ('Dodes''ka-den (Clickety-Clack)', 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', 1, '2022-01-30T07:07:13Z');
// insert into Post (title, text, "creatorId", "createdAt") values ('No Time for Comedy', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.

// Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', 1, '2022-07-19T01:21:36Z');
// insert into Post (title, text, "creatorId", "createdAt") values ('Urusei Yatsura Movie 2: Beautiful Dreamer (Urusei Yatsura 2: Byûtifuru dorîmâ)', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.

// Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', 1, '2022-02-26T13:07:14Z');
// insert into Post (title, text, "creatorId", "createdAt") values ('Luna de Avellaneda', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.

// Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

// Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 1, '2021-11-27T15:10:34Z');
// insert into Post (title, text, "creatorId", "createdAt") values ('Coast of Death', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.

// Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.

// Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', 1, '2022-10-05T14:58:37Z');
// insert into Post (title, text, "creatorId", "createdAt") values ('Ferngully: The Last Rainforest', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.

// Sed ante. Vivamus tortor. Duis mattis egestas metus.

// Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 1, '2021-12-08T00:24:32Z');
// insert into Post (title, text, "creatorId", "createdAt") values ('S21: The Khmer Rouge Death Machine (S-21, la machine de mort Khmère rouge)', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', 1, '2022-03-10T08:01:42Z');
// insert into Post (title, text, "creatorId", "createdAt") values ('Devil and Daniel Johnston, The', 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.

// Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', 1, '2021-12-28T10:39:50Z');
// insert into Post (title, text, "creatorId", "createdAt") values ('Pit and the Pendulum, The', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

// Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 1, '2022-07-21T18:04:51Z');
// insert into Post (title, text, "creatorId", "createdAt") values ('Jingle All the Way 2', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.

// Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.

// Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', 1, '2022-02-04T17:17:36Z');
// insert into Post (title, text, "creatorId", "createdAt") values ('Hobbit, The', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.

// Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.

// Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', 1, '2022-06-29T17:50:17Z');
// insert into Post (title, text, "creatorId", "createdAt") values ('Pirate, The', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.

// Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.

// Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', 1, '2022-07-14T23:15:38Z');
// insert into Post (title, text, "creatorId", "createdAt") values ('Anger Management', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.

// Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.

// Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', 1, '2022-09-12T22:28:34Z');
// insert into Post (title, text, "creatorId", "createdAt") values ('Halloween', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.

// Sed ante. Vivamus tortor. Duis mattis egestas metus.

// Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 1, '2021-11-12T23:48:59Z');
// insert into Post (title, text, "creatorId", "createdAt") values ('Bounty, The', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 1, '2022-03-29T00:16:01Z');
// insert into Post (title, text, "creatorId", "createdAt") values ('The Rebel', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.

// Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', 1, '2022-05-10T10:35:46Z');
// insert into Post (title, text, "creatorId", "createdAt") values ('Nico and Dani (Krámpack)', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.

// Fusce consequat. Nulla nisl. Nunc nisl.

// Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', 1, '2022-05-05T00:57:37Z');
// insert into Post (title, text, "creatorId", "createdAt") values ('Member of the Wedding, The', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', 1, '2021-11-11T20:59:30Z');
// insert into Post (title, text, "creatorId", "createdAt") values ('Captain America', 'Fusce consequat. Nulla nisl. Nunc nisl.', 1, '2022-05-16T08:26:03Z');
// insert into Post (title, text, "creatorId", "createdAt") values ('Raging Phoenix (Deu suay doo)', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', 1, '2021-12-05T08:05:46Z');
// insert into Post (title, text, "creatorId", "createdAt") values ('CrissCross', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', 1, '2022-09-24T08:31:05Z');
// insert into Post (title, text, "creatorId", "createdAt") values ('Love Is All There Is', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.', 1, '2021-11-16T16:03:36Z');
// insert into Post (title, text, "creatorId", "createdAt") values ('Thousands Cheer', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

// Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

// Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 1, '2022-04-18T01:04:47Z');
// insert into Post (title, text, "creatorId", "createdAt") values ('Special Bulletin', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.

// Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', 1, '2021-10-28T02:59:22Z');
// insert into Post (title, text, "creatorId", "createdAt") values ('The Conrad Boys', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', 1, '2022-06-27T00:32:16Z');
// insert into Post (title, text, "creatorId", "createdAt") values ('Cat''s-Paw, The', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.

// Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', 1, '2022-01-21T11:41:16Z');
// insert into Post (title, text, "creatorId", "createdAt") values ('Homework', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.

// Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.

// Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', 1, '2021-11-11T17:27:36Z');
// insert into Post (title, text, "creatorId", "createdAt") values ('Hard Target', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

// Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.

// Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', 1, '2022-07-07T04:32:48Z');
// insert into Post (title, text, "creatorId", "createdAt") values ('Thomas Crown Affair, The', 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.

// Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

// Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', 1, '2022-02-13T09:10:03Z');
// insert into Post (title, text, "creatorId", "createdAt") values ('Guilt Trip, The', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

// Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 1, '2022-07-26T17:26:22Z');
// insert into Post (title, text, "creatorId", "createdAt") values ('Gun Crazy (a.k.a. Deadly Is the Female)', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', 1, '2022-09-20T21:06:50Z');
// insert into Post (title, text, "creatorId", "createdAt") values ('Devil, Probably, The (Diable probablement, Le)', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.

// Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.

// Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', 1, '2022-06-04T16:24:36Z');
// insert into Post (title, text, "creatorId", "createdAt") values ('Loner (Woetoli)', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.

// Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', 1, '2021-12-18T16:32:05Z');
// insert into Post (title, text, "creatorId", "createdAt") values ('In the Soup', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.

// Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', 1, '2022-02-21T16:54:58Z');
// insert into Post (title, text, "creatorId", "createdAt") values ('Last Resort (National Lampoon''s Last Resort)', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

// Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', 1, '2022-01-01T00:59:22Z');
// insert into Post (title, text, "creatorId", "createdAt") values ('Vanya on 42nd Street', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

// Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 1, '2022-04-29T03:17:18Z');
// insert into Post (title, text, "creatorId", "createdAt") values ('Don''t Be a Menace to South Central While Drinking Your Juice in the Hood', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', 1, '2022-04-26T12:05:43Z');
// insert into Post (title, text, "creatorId", "createdAt") values ('Wild Side', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

// Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.

// Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', 1, '2022-06-22T23:42:29Z');
// insert into Post (title, text, "creatorId", "createdAt") values ('Jungle Fever', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.

// Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.

// Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', 1, '2022-06-13T14:15:59Z');
// insert into Post (title, text, "creatorId", "createdAt") values ('Ring of Bright Water', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.

// Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', 1, '2022-03-30T13:14:22Z');
// insert into Post (title, text, "creatorId", "createdAt") values ('America the Beautiful 2: The Thin Commandments ', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.

// Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.

// Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', 1, '2021-12-24T02:09:02Z');
// insert into Post (title, text, "creatorId", "createdAt") values ('Godzilla', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.

// Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.

// In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', 1, '2021-11-24T17:08:23Z');
// insert into Post (title, text, "creatorId", "createdAt") values ('Bone Collector, The', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.

// Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.

// Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', 1, '2021-12-05T23:07:59Z');
// insert into Post (title, text, "creatorId", "createdAt") values ('Eye of the Dolphin', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.

// Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.

// Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', 1, '2022-05-17T21:56:25Z');
// insert into Post (title, text, "creatorId", "createdAt") values ('Bloomington', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.

// Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', 1, '2021-12-30T15:11:20Z');
// insert into Post (title, text, "creatorId", "createdAt") values ('Temp, The', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.

// Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', 1, '2022-07-24T17:18:08Z');
// insert into Post (title, text, "creatorId", "createdAt") values ('The Gamers', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.

// Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 1, '2021-11-30T12:05:21Z');
// insert into Post (title, text, "creatorId", "createdAt") values ('Just Before Dawn', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.

// Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.

// Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', 1, '2022-10-02T11:17:12Z');
// insert into Post (title, text, "creatorId", "createdAt") values ('Species II', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

// Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.

// Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', 1, '2022-05-02T08:23:52Z');
// insert into Post (title, text, "creatorId", "createdAt") values ('Going Hollywood', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.

// Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', 1, '2022-08-12T08:21:24Z');
// insert into Post (title, text, "creatorId", "createdAt") values ('Tromeo and Juliet', 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.

// Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', 1, '2022-05-08T14:56:36Z');
// insert into Post (title, text, "creatorId", "createdAt") values ('Arbitrage', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.

// Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', 1, '2021-12-20T13:12:25Z');
// insert into Post (title, text, "creatorId", "createdAt") values ('Lips of Blood (Lèvres de sang)', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.

// Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', 1, '2022-02-21T06:32:44Z');
// insert into Post (title, text, "creatorId", "createdAt") values ('Caiman, The (Il caimano)', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.

// Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', 1, '2022-08-21T08:40:06Z');
// insert into Post (title, text, "creatorId", "createdAt") values ('Drummer-Crab (Le Crabe-Tambour)', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.

// Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', 1, '2022-03-24T13:10:19Z');
// insert into Post (title, text, "creatorId", "createdAt") values ('Short Time', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', 1, '2022-10-04T05:13:34Z');
// insert into Post (title, text, "creatorId", "createdAt") values ('Incredible Journey, The', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.

// In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', 1, '2022-05-04T11:46:00Z');
// insert into Post (title, text, "creatorId", "createdAt") values ('Batman: Gotham Knight', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', 1, '2022-03-02T22:01:33Z');
// insert into Post (title, text, "creatorId", "createdAt") values ('Dead Man on Campus', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', 1, '2021-12-16T08:15:30Z');
// insert into Post (title, text, "creatorId", "createdAt") values ('Shut Up & Sing', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

// Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', 1, '2022-08-16T09:12:50Z');
// insert into Post (title, text, "creatorId", "createdAt") values ('Apache', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.

// Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', 1, '2022-04-01T17:36:31Z');
// insert into Post (title, text, "creatorId", "createdAt") values ('Future, The', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.

// Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', 1, '2022-05-12T04:36:42Z');
// insert into Post (title, text, "creatorId", "createdAt") values ('Men in Black II (a.k.a. MIIB) (a.k.a. MIB 2)', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 1, '2022-01-20T08:58:08Z');
// `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
