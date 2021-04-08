import {MigrationInterface, QueryRunner} from "typeorm";

export class MockPostsData1617821419274 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        insert into post (title, text, authorId) values ('Dabchick', 'gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget', 1);
insert into post (title, text, authorId) values ('Long-finned pilot whale', 'pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum', 1);
insert into post (title, text, authorId) values ('Coot, red-knobbed', 'id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit', 1);
insert into post (title, text, authorId) values ('Owl, australian masked', 'purus phasellus in felis donec semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla sed accumsan felis', 1);
insert into post (title, text, authorId) values ('Hippopotamus', 'ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis', 1);
insert into post (title, text, authorId) values ('Painted stork', 'non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis', 1);
insert into post (title, text, authorId) values ('Ovenbird', 'vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi', 1);
insert into post (title, text, authorId) values ('Parrot, hawk-headed', 'ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum', 1);
insert into post (title, text, authorId) values ('Pelican, brown', 'nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras', 1);
insert into post (title, text, authorId) values ('Black-backed jackal', 'aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris', 1);
insert into post (title, text, authorId) values ('Deer, swamp', 'ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem', 1);
insert into post (title, text, authorId) values ('Fox, blue', 'velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in', 1);
insert into post (title, text, authorId) values ('Crab, sally lightfoot', 'lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in', 1);
insert into post (title, text, authorId) values ('Pied kingfisher', 'natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur', 1);
insert into post (title, text, authorId) values ('Timber wolf', 'praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus', 1);
insert into post (title, text, authorId) values ('Mocking cliffchat', 'lectus vestibulum quam sapien varius ut blandit non interdum in ante vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae duis', 1);
insert into post (title, text, authorId) values ('Kiskadee, great', 'fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse', 1);
insert into post (title, text, authorId) values ('Sulfur-crested cockatoo', 'nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor', 1);
insert into post (title, text, authorId) values ('Eagle, golden', 'faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi', 1);
insert into post (title, text, authorId) values ('Blue and gold macaw', 'sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam', 1);
insert into post (title, text, authorId) values ('Western palm tanager (unidentified)', 'adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget', 1);
insert into post (title, text, authorId) values ('Skua, great', 'nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend quam a odio in hac habitasse', 1);
insert into post (title, text, authorId) values ('Eastern fox squirrel', 'in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend quam a odio in', 1);
insert into post (title, text, authorId) values ('Eastern boa constrictor', 'donec dapibus duis at velit eu est congue elementum in', 1);
insert into post (title, text, authorId) values ('Badger, european', 'neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus', 1);
insert into post (title, text, authorId) values ('Gemsbok', 'venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar', 1);
insert into post (title, text, authorId) values ('Ostrich', 'in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et', 1);
insert into post (title, text, authorId) values ('Springbok', 'praesent lectus vestibulum quam sapien varius ut blandit non interdum in ante vestibulum ante ipsum primis in faucibus orci', 1);
insert into post (title, text, authorId) values ('Desert kangaroo rat', 'quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie', 1);
insert into post (title, text, authorId) values ('Common eland', 'nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus', 1);
insert into post (title, text, authorId) values ('Tarantula', 'nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis at velit eu est congue elementum', 1);
insert into post (title, text, authorId) values ('Rhea, greater', 'luctus et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec', 1);
insert into post (title, text, authorId) values ('Langur, hanuman', 'scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris eget', 1);
insert into post (title, text, authorId) values ('Cat, jungle', 'platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras', 1);
insert into post (title, text, authorId) values ('Cape raven', 'sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut', 1);
insert into post (title, text, authorId) values ('Savanna baboon', 'leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu', 1);
insert into post (title, text, authorId) values ('Reindeer', 'sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in', 1);
insert into post (title, text, authorId) values ('Seal, northern fur', 'bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus', 1);
insert into post (title, text, authorId) values ('Striped skunk', 'maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat', 1);
insert into post (title, text, authorId) values ('Vulture, griffon', 'nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus', 1);
insert into post (title, text, authorId) values ('Pale white-eye', 'nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis', 1);
insert into post (title, text, authorId) values ('Mongoose, banded', 'ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula', 1);
insert into post (title, text, authorId) values ('Collared peccary', 'tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus in', 1);
insert into post (title, text, authorId) values ('Wallaby, bennett''s', 'in felis donec semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla sed accumsan felis ut', 1);
insert into post (title, text, authorId) values ('Red howler monkey', 'morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque', 1);
insert into post (title, text, authorId) values ('Scaly-breasted lorikeet', 'luctus et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat dui', 1);
insert into post (title, text, authorId) values ('Capuchin, black-capped', 'eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat', 1);
insert into post (title, text, authorId) values ('Ass, asiatic wild', 'aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed', 1);
insert into post (title, text, authorId) values ('Caracal', 'vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient', 1);
insert into post (title, text, authorId) values ('Lion, steller''s sea', 'placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus', 1);
insert into post (title, text, authorId) values ('Giant heron', 'faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae', 1);
insert into post (title, text, authorId) values ('Flying fox (unidentified)', 'iaculis diam erat fermentum justo nec condimentum neque sapien placerat', 1);
insert into post (title, text, authorId) values ('Monkey, black spider', 'convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris', 1);
insert into post (title, text, authorId) values ('Asiatic jackal', 'varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla', 1);
insert into post (title, text, authorId) values ('Deer, savannah', 'nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est', 1);
insert into post (title, text, authorId) values ('Frog (unidentified)', 'felis eu sapien cursus vestibulum proin eu mi nulla ac enim', 1);
insert into post (title, text, authorId) values ('Mockingbird, galapagos', 'aliquam convallis nunc proin at turpis a pede posuere nonummy integer non velit', 1);
insert into post (title, text, authorId) values ('American racer', 'eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus', 1);
insert into post (title, text, authorId) values ('Owl, burrowing', 'nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper', 1);
insert into post (title, text, authorId) values ('Neotropic cormorant', 'felis eu sapien cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec', 1);
insert into post (title, text, authorId) values ('Pale white-eye', 'nisl aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat', 1);
insert into post (title, text, authorId) values ('American Virginia opossum', 'quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec semper', 1);
insert into post (title, text, authorId) values ('Numbat', 'sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu', 1);
insert into post (title, text, authorId) values ('Llama', 'dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non', 1);
insert into post (title, text, authorId) values ('South American meadowlark (unidentified)', 'non pretium quis lectus suspendisse potenti in eleifend quam a odio in', 1);
insert into post (title, text, authorId) values ('Woodpecker, downy', 'pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar', 1);
insert into post (title, text, authorId) values ('Red-tailed hawk', 'justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus', 1);
insert into post (title, text, authorId) values ('Anaconda (unidentified)', 'odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus', 1);
insert into post (title, text, authorId) values ('Spotted hyena', 'venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis', 1);
insert into post (title, text, authorId) values ('Ringtail cat', 'convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum', 1);
insert into post (title, text, authorId) values ('Glider, sugar', 'cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra magna ac consequat metus sapien ut nunc vestibulum', 1);
insert into post (title, text, authorId) values ('Malabar squirrel', 'pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac', 1);
insert into post (title, text, authorId) values ('Barbet, black-collared', 'nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis', 1);
insert into post (title, text, authorId) values ('Greater sage grouse', 'elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum', 1);
insert into post (title, text, authorId) values ('Steller''s sea lion', 'vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu', 1);
insert into post (title, text, authorId) values ('Possum, ring-tailed', 'aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut', 1);
insert into post (title, text, authorId) values ('Golden-mantled ground squirrel', 'natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum', 1);
insert into post (title, text, authorId) values ('Phascogale, brush-tailed', 'rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo', 1);
insert into post (title, text, authorId) values ('Eagle, pallas''s fish', 'elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum', 1);
insert into post (title, text, authorId) values ('Springbok', 'mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean', 1);
insert into post (title, text, authorId) values ('Zebra, common', 'ac neque duis bibendum morbi non quam nec dui luctus rutrum', 1);
insert into post (title, text, authorId) values ('Ocelot', 'sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor', 1);
insert into post (title, text, authorId) values ('Tiger snake', 'duis faucibus accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend', 1);
insert into post (title, text, authorId) values ('Malay squirrel (unidentified)', 'magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci', 1);
insert into post (title, text, authorId) values ('Southern tamandua', 'sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum', 1);
insert into post (title, text, authorId) values ('Mexican beaded lizard', 'dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna', 1);
insert into post (title, text, authorId) values ('Kalahari scrub robin', 'pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in', 1);
insert into post (title, text, authorId) values ('Deer, mule', 'habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id', 1);
insert into post (title, text, authorId) values ('Bushbuck', 'in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed', 1);
insert into post (title, text, authorId) values ('Urial', 'justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras', 1);
insert into post (title, text, authorId) values ('Indian giant squirrel', 'enim in tempor turpis nec euismod scelerisque quam turpis adipiscing', 1);
insert into post (title, text, authorId) values ('Little brown bat', 'ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget orci', 1);
insert into post (title, text, authorId) values ('Red hartebeest', 'leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu', 1);
insert into post (title, text, authorId) values ('Long-billed cockatoo', 'vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id', 1);
insert into post (title, text, authorId) values ('American black bear', 'turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis', 1);
insert into post (title, text, authorId) values ('Deer, swamp', 'eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at', 1);
insert into post (title, text, authorId) values ('Antelope ground squirrel', 'proin at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget', 1);
insert into post (title, text, authorId) values ('Bent-toed gecko', 'morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis', 1);
insert into post (title, text, authorId) values ('Crane, wattled', 'venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam', 1);
insert into post (title, text, authorId) values ('Vicuna', 'sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus', 1);
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
