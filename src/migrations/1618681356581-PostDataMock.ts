import {MigrationInterface, QueryRunner} from "typeorm";

export class PostDataMock1618681356581 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        insert into post (title, text, "authorId", "createdAt") values ('Sun gazer', 'Melilotus elegans Salzmann', 1, '2020-04-28T22:54:38Z');
insert into post (title, text, "authorId", "createdAt") values ('Desert kangaroo rat', 'Chloris pectinata Benth.', 1, '2020-11-16T05:39:30Z');
insert into post (title, text, "authorId", "createdAt") values ('Pale-throated three-toed sloth', 'Smyrnium olusatrum L.', 1, '2020-10-05T11:06:24Z');
insert into post (title, text, "authorId", "createdAt") values ('Tenrec, tailless', 'Cypripedium ×andrewsii A.M. Fuller var. ×andrewsii ', 1, '2021-03-08T23:22:50Z');
insert into post (title, text, "authorId", "createdAt") values ('Ibis, sacred', 'Polypodium pellucidum Kaulf. var. pellucidum', 1, '2020-07-17T12:03:12Z');
insert into post (title, text, "authorId", "createdAt") values ('Red-winged hawk (unidentified)', 'Spergularia atrosperma R.P. Rossb.', 1, '2020-10-10T11:47:43Z');
insert into post (title, text, "authorId", "createdAt") values ('Blue and yellow macaw', 'Selaginella menziesii (Hook. & Grev.) Spring', 1, '2020-07-28T09:22:10Z');
insert into post (title, text, "authorId", "createdAt") values ('Bunting, crested', 'Huperzia dichotoma (Jacq.) Trevis.', 1, '2020-07-25T10:10:52Z');
insert into post (title, text, "authorId", "createdAt") values ('Southern hairy-nosed wombat', 'Linaria supina (L.) Chaz.', 1, '2021-02-24T11:27:42Z');
insert into post (title, text, "authorId", "createdAt") values ('Eastern boa constrictor', 'Lyonothamnus A. Gray', 1, '2020-09-19T20:58:37Z');
insert into post (title, text, "authorId", "createdAt") values ('Manatee', 'Dioscorea quaternata J.F. Gmel.', 1, '2020-11-14T21:29:16Z');
insert into post (title, text, "authorId", "createdAt") values ('Tayra', 'Cyperus lentiginosus Millsp. & Chase', 1, '2020-10-08T04:04:10Z');
insert into post (title, text, "authorId", "createdAt") values ('Crane, brolga', 'Saxifraga mertensiana Bong.', 1, '2021-01-30T19:34:09Z');
insert into post (title, text, "authorId", "createdAt") values ('Cat, miner''s', 'Brachythecium bolanderi (Lesq.) A. Jaeger', 1, '2020-12-17T15:48:34Z');
insert into post (title, text, "authorId", "createdAt") values ('Squirrel, pine', 'Gratiola flava Leavenworth', 1, '2021-03-11T09:21:22Z');
insert into post (title, text, "authorId", "createdAt") values ('Mallard', 'Muhlenbergia sylvatica (Torr.) Torr. ex A. Gray', 1, '2020-05-14T12:33:21Z');
insert into post (title, text, "authorId", "createdAt") values ('Campo flicker', 'Eriogonum diatomaceum Reveal, J. Reynolds & Picciani', 1, '2021-04-15T07:23:24Z');
insert into post (title, text, "authorId", "createdAt") values ('Cottonmouth', 'Lepturus repens (G. Forst.) R. Br.', 1, '2020-11-26T15:52:01Z');
insert into post (title, text, "authorId", "createdAt") values ('Cape clawless otter', 'Mammillaria prolifera (Mill.) Haw.', 1, '2020-11-29T15:06:01Z');
insert into post (title, text, "authorId", "createdAt") values ('Wallaby, whip-tailed', 'Lupinus johannis-howellii C.P. Sm.', 1, '2020-11-14T03:17:32Z');
insert into post (title, text, "authorId", "createdAt") values ('Oriental short-clawed otter', 'Piptatheropsis exigua (Thurb.) Romasch., P.M. Peterson & R.J. Soreng', 1, '2020-08-25T19:03:11Z');
insert into post (title, text, "authorId", "createdAt") values ('Duck, comb', 'Juncus fascinatus (M.C. Johnst.) W. Knapp', 1, '2020-12-23T21:55:20Z');
insert into post (title, text, "authorId", "createdAt") values ('Kookaburra, laughing', 'Acer negundo L. var. interius (Britton) Sarg.', 1, '2020-11-06T10:04:38Z');
insert into post (title, text, "authorId", "createdAt") values ('White stork', 'Minuartia decumbens T.W. Nelson & J.P. Nelson', 1, '2020-07-31T18:02:24Z');
insert into post (title, text, "authorId", "createdAt") values ('Antelope, four-horned', 'Brachythecium populeum (Hedw.) Schimp.', 1, '2021-02-28T11:15:56Z');
insert into post (title, text, "authorId", "createdAt") values ('Crowned hawk-eagle', 'Frangula Mill.', 1, '2021-03-15T02:42:54Z');
insert into post (title, text, "authorId", "createdAt") values ('Dove, rock', 'Heuchera cylindrica Douglas ex Hook. var. glabella (Torr. & A. Gray) Wheelock', 1, '2020-09-19T10:15:33Z');
insert into post (title, text, "authorId", "createdAt") values ('Dolphin, striped', 'Tayloria serrata (Hedw.) Bruch & Schimp.', 1, '2021-01-12T01:15:47Z');
insert into post (title, text, "authorId", "createdAt") values ('Bat, madagascar fruit', 'Crataegus ×anomala Sarg. (pro sp.)', 1, '2020-12-21T11:01:51Z');
insert into post (title, text, "authorId", "createdAt") values ('Trumpeter, green-winged', 'Mimulus tilingii Regel var. caespitosus (Greene) A.L. Grant', 1, '2020-09-19T15:50:06Z');
insert into post (title, text, "authorId", "createdAt") values ('Oriental white-backed vulture', 'Melaleuca linariifolia Sm.', 1, '2020-12-25T22:04:52Z');
insert into post (title, text, "authorId", "createdAt") values ('Ornate rock dragon', 'Scabiosa atropurpurea L.', 1, '2020-11-07T00:14:18Z');
insert into post (title, text, "authorId", "createdAt") values ('Squirrel, pine', 'Acleisanthes A. Gray', 1, '2020-12-30T19:46:04Z');
insert into post (title, text, "authorId", "createdAt") values ('Common wolf', 'Rainiera stricta (Greene) Greene', 1, '2020-11-30T13:47:06Z');
insert into post (title, text, "authorId", "createdAt") values ('Lesser masked weaver', 'Phalaris angusta Nees ex Trin.', 1, '2021-03-27T15:32:19Z');
insert into post (title, text, "authorId", "createdAt") values ('Seven-banded armadillo', 'Andropogon longiberbis Hack.', 1, '2020-09-19T10:56:06Z');
insert into post (title, text, "authorId", "createdAt") values ('Ground legaan', 'Poa keckii Soreng', 1, '2020-05-19T14:37:17Z');
insert into post (title, text, "authorId", "createdAt") values ('Owl, australian masked', 'Mimosa quadrivalvis L. var. floridana (Chapm.) Barneby', 1, '2020-07-28T16:37:21Z');
insert into post (title, text, "authorId", "createdAt") values ('Deer, roe', 'Cyperus hillebrandii Boeckeler var. hillebrandii', 1, '2020-07-29T09:05:33Z');
insert into post (title, text, "authorId", "createdAt") values ('Topi', 'Muhlenbergia capillaris (Lam.) Trin.', 1, '2020-12-25T12:58:40Z');
insert into post (title, text, "authorId", "createdAt") values ('Bush dog', 'Ceratotheca sesamoides Endl.', 1, '2020-06-20T01:56:17Z');
insert into post (title, text, "authorId", "createdAt") values ('Chital', 'Alternanthera paronychioides A. St.-Hil. var. amazonica Huber', 1, '2021-02-05T01:03:45Z');
insert into post (title, text, "authorId", "createdAt") values ('Pied avocet', 'Eriogonum wrightii Torr. ex Benth. var. subscaposum S. Watson', 1, '2021-03-13T04:14:46Z');
insert into post (title, text, "authorId", "createdAt") values ('Great cormorant', 'Dactylorhiza majalis (Rchb. f.) P.F. Hunt & Summerhayes ssp. praetermissa (Druce) D.M. Moore & Soó', 1, '2020-04-28T00:00:24Z');
insert into post (title, text, "authorId", "createdAt") values ('Suricate', 'Hymenoclea Torr. & A. Gray ex A. Gray', 1, '2021-02-14T17:39:50Z');
insert into post (title, text, "authorId", "createdAt") values ('Armadillo, seven-banded', 'Allium crenulatum Wiegand', 1, '2021-01-20T03:51:55Z');
insert into post (title, text, "authorId", "createdAt") values ('Flycatcher, tyrant', 'Gratiola virginiana L. var. virginiana', 1, '2020-09-24T02:03:56Z');
insert into post (title, text, "authorId", "createdAt") values ('Springhare', 'Sporobolus neglectus Nash', 1, '2021-03-11T13:00:33Z');
insert into post (title, text, "authorId", "createdAt") values ('Roseate cockatoo', 'Eriogonum gracile Benth. var. gracile', 1, '2020-12-06T06:42:47Z');
insert into post (title, text, "authorId", "createdAt") values ('Cape fox', 'Prenanthes ×mainensis A. Gray (pro sp.)', 1, '2021-02-14T19:45:08Z');
insert into post (title, text, "authorId", "createdAt") values ('Emerald green tree boa', 'Cypripedium passerinum Richardson', 1, '2020-10-18T13:05:09Z');
insert into post (title, text, "authorId", "createdAt") values ('Crane, stanley', 'Verrucaria degelii R. Sant.', 1, '2020-07-24T17:39:11Z');
insert into post (title, text, "authorId", "createdAt") values ('Jaguar', 'Aegopodium podagraria L.', 1, '2020-10-01T09:46:28Z');
insert into post (title, text, "authorId", "createdAt") values ('Eagle, white-bellied sea', 'Lupinus leucophyllus Douglas ex Lindl. ssp. leucophyllus var. canescens (Howell) C.P. Sm.', 1, '2020-05-21T14:26:35Z');
insert into post (title, text, "authorId", "createdAt") values ('Caracara (unidentified)', 'Senecio wootonii Greene', 1, '2020-11-01T04:58:27Z');
insert into post (title, text, "authorId", "createdAt") values ('Tern, royal', 'Desmanthus covillei (Britton & Rose) Wiggins ex B.L. Turner', 1, '2020-06-28T10:48:41Z');
insert into post (title, text, "authorId", "createdAt") values ('Fox, cape', 'Doryopteris J. Sm.', 1, '2021-02-24T11:07:05Z');
insert into post (title, text, "authorId", "createdAt") values ('Leopard', 'Dacrydium Lamb.', 1, '2020-06-17T22:27:51Z');
insert into post (title, text, "authorId", "createdAt") values ('Booby, blue-faced', 'Solidago simplex Kunth ssp. randii (Porter) Ringius var. racemosa (Greene) Ringius', 1, '2020-06-23T05:29:47Z');
insert into post (title, text, "authorId", "createdAt") values ('Jackal, indian', 'Verbascum sinuatum L.', 1, '2020-11-01T23:36:33Z');
insert into post (title, text, "authorId", "createdAt") values ('Bird (unidentified)', 'Mitracarpus polycladus Urb.', 1, '2020-08-16T16:35:19Z');
insert into post (title, text, "authorId", "createdAt") values ('Phalarope, red-necked', 'Echinocactus horizonthalonius Lem. var. nicholii L.D. Benson', 1, '2020-12-19T04:07:49Z');
insert into post (title, text, "authorId", "createdAt") values ('Pampa gray fox', 'Carex castanea Wahlenb.', 1, '2021-02-02T23:30:36Z');
insert into post (title, text, "authorId", "createdAt") values ('Asian red fox', 'Ilex paraguariensis A. St.-Hil.', 1, '2020-07-29T11:33:04Z');
insert into post (title, text, "authorId", "createdAt") values ('Snake, carpet', 'Spiraea tomentosa L.', 1, '2020-05-10T18:48:51Z');
insert into post (title, text, "authorId", "createdAt") values ('White-lipped peccary', 'Cyrtandra ×honolulensis Wawra (pro sp.)', 1, '2020-12-27T21:03:35Z');
insert into post (title, text, "authorId", "createdAt") values ('Blue-tongued skink', 'Brassica oleracea L. var. botrytis L.', 1, '2020-10-14T15:53:38Z');
insert into post (title, text, "authorId", "createdAt") values ('Bengal vulture', 'Cheirodendron platyphyllum (Hook. & Arn.) Seem. ssp. platyphyllum', 1, '2020-10-20T21:15:31Z');
insert into post (title, text, "authorId", "createdAt") values ('Heron, black-crowned night', 'Sida rhombifolia L.', 1, '2020-09-20T20:56:42Z');
insert into post (title, text, "authorId", "createdAt") values ('Long-nosed bandicoot', 'Dudleya cymosa (Lem.) Britton & Rose ssp. cymosa', 1, '2020-07-27T22:12:02Z');
insert into post (title, text, "authorId", "createdAt") values ('Stone sheep', 'Cynodon nlemfuensis Vanderyst var. robustus W.D. Clayton & Harlan', 1, '2021-01-17T08:57:00Z');
insert into post (title, text, "authorId", "createdAt") values ('Southern white-crowned shrike', 'Geranium solanderi Carolin', 1, '2020-10-14T01:17:13Z');
insert into post (title, text, "authorId", "createdAt") values ('Caracara (unidentified)', 'Datura inermis Jacq. [excluded]', 1, '2020-09-25T13:31:49Z');
insert into post (title, text, "authorId", "createdAt") values ('Olive baboon', 'Achillea millefolium L. var. californica (Pollard) Jeps.', 1, '2021-02-28T15:38:59Z');
insert into post (title, text, "authorId", "createdAt") values ('Dingo', 'Clarkia gracilis (Piper) A. Nelson & J.F. Macbr. ssp. albicaulis (Jeps.) F.H. Lewis & M.E. Lewis', 1, '2020-06-29T06:00:40Z');
insert into post (title, text, "authorId", "createdAt") values ('Mockingbird, galapagos', 'Polygonum arifolium L.', 1, '2021-01-20T10:33:02Z');
insert into post (title, text, "authorId", "createdAt") values ('Parakeet, rose-ringed', 'Chamaedorea costaricana Oerst.', 1, '2020-08-07T19:07:16Z');
insert into post (title, text, "authorId", "createdAt") values ('Bat, asian false vampire', 'Hesperolinon (A. Gray) Small', 1, '2020-10-20T16:56:38Z');
insert into post (title, text, "authorId", "createdAt") values ('Starling, cape', 'Astragalus umbraticus Sheldon', 1, '2021-04-14T18:20:39Z');
insert into post (title, text, "authorId", "createdAt") values ('Mockingbird, galapagos', 'Lathyrus polymorphus Nutt.', 1, '2020-05-01T21:15:56Z');
insert into post (title, text, "authorId", "createdAt") values ('Killer whale', 'Schoepfia obovata C. Wright', 1, '2020-12-24T09:39:27Z');
insert into post (title, text, "authorId", "createdAt") values ('Marmot, yellow-bellied', 'Chrysogonum L.', 1, '2021-01-09T04:45:25Z');
insert into post (title, text, "authorId", "createdAt") values ('Blue racer', 'Charpentiera Gaudich.', 1, '2020-09-12T06:47:07Z');
insert into post (title, text, "authorId", "createdAt") values ('White-lipped peccary', 'Heliotropium curassavicum L. var. oculatum (A. Heller) I.M. Johnst.', 1, '2020-08-06T23:58:19Z');
insert into post (title, text, "authorId", "createdAt") values ('Wombat, southern hairy-nosed', 'Letharia (Th. Fr.) Zahlbr.', 1, '2020-12-07T22:21:15Z');
insert into post (title, text, "authorId", "createdAt") values ('American beaver', 'Parmotrema mellissii (C.W. Dodge) Hale', 1, '2021-03-27T00:06:10Z');
insert into post (title, text, "authorId", "createdAt") values ('Small-spotted genet', 'Splachnobryum Müll. Hal.', 1, '2020-09-11T06:20:39Z');
insert into post (title, text, "authorId", "createdAt") values ('Lizard, goanna', 'Atriplex L.', 1, '2021-02-26T00:30:39Z');
insert into post (title, text, "authorId", "createdAt") values ('Galapagos mockingbird', 'Astragalus concordius S.L. Welsh', 1, '2020-05-31T04:20:14Z');
insert into post (title, text, "authorId", "createdAt") values ('Red-billed toucan', 'Collinsia heterophylla Buist ex Graham var. austromontana (Newsom) Munz', 1, '2020-06-24T14:48:53Z');
insert into post (title, text, "authorId", "createdAt") values ('Fox, blue', 'Graphis insidiosa (C. Knight & Mitt.) Hook. f.', 1, '2021-02-13T00:37:49Z');
insert into post (title, text, "authorId", "createdAt") values ('Frilled dragon', 'Pycnanthemum incanum (L.) Michx. var. puberulum (E. Grant & Epling) Fernald', 1, '2020-04-26T20:18:05Z');
insert into post (title, text, "authorId", "createdAt") values ('Spotted deer', 'Mitchella repens L.', 1, '2021-04-10T22:29:00Z');
insert into post (title, text, "authorId", "createdAt") values ('Python (unidentified)', 'Scaevola gaudichaudii Hook. & Arn.', 1, '2021-04-11T21:44:27Z');
insert into post (title, text, "authorId", "createdAt") values ('Macaque, rhesus', 'Cistanthe pygmaea (Parish ex Rydb.) Hershkovitz', 1, '2021-01-22T10:09:29Z');
insert into post (title, text, "authorId", "createdAt") values ('Heron, little', 'Tradescantia hirsutiflora Bush', 1, '2020-06-16T19:25:31Z');
insert into post (title, text, "authorId", "createdAt") values ('Mourning collared dove', 'Eugenia rhombea (Berg) Krug & Urb.', 1, '2021-03-16T10:48:03Z');
insert into post (title, text, "authorId", "createdAt") values ('Cormorant, little', 'Dracontium L.', 1, '2020-12-14T23:01:25Z');
insert into post (title, text, "authorId", "createdAt") values ('Bushpig', 'Eupatorium sessilifolium L.', 1, '2021-03-18T09:10:43Z');
insert into post (title, text, "authorId", "createdAt") values ('Capuchin, white-fronted', 'Arctostaphylos manzanita Parry ssp. elegans (Eastw.) P.V. Wells', 1, '2020-07-07T12:28:28Z');`)
    }

    public async down(_: QueryRunner): Promise<void> {
    }

}
