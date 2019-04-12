import request from '@/utils/request'

export function getTable(p) {
  return request({
    url: '/table/list',
    method: 'post',
    params: { p }
  })
}
const dataList = {
  'code': 20000,
  'data': {
    'items': [
      {
        'id': '140000201104142524',
        'title': '上课课时量',
        'year': 2018,
        'month': 11,
        'week': 1,
        'zhenghe': 9.5,
        'skill': 8,
        'outdoor': 3,
        'total': 17.5,
        'status': 'published',
        'name': '缪茂鑫',
        'xishu1': 1.0,
        'xishu2': 1.0,
        'create_time': '2018-12-01 12:01:11'
      },
      {
        'id': '32000019990121685X',
        'title': '上课课时量',
        'year': 2018,
        'month': 11,
        'week': 1,
        'zhenghe': 10,
        'skill': 8,
        'outdoor': 3,
        'total': 18,
        'status': 'deleted',
        'name': '王译',
        'xishu1': 1.0,
        'xishu2': 1.0,
        'create_time': '2018-12-01 16:34:33'
      },
      {
        'id': '120000199711280466',
        'title': '上课课时量',
        'year': 2018,
        'month': 11,
        'week': 1,
        'zhenghe': 5,
        'skill': 7.5,
        'outdoor': 3,
        'total': 12.5,
        'status': 'draft',
        'name': '那贵全',
        'xishu1': 1.2,
        'xishu2': 1.3,
        'create_time': '2018-12-01 01:11:58'
      }
    ]
  }
}
/* var oldData = {
  'code': 20000,
  'data': {
    'items': [
      {
        'id': '140000201104142524',
        'title': 'Qbuinjq owc lvxgew fhtt qnxupjzf qdwf kdex uquyiytef tqsqoh iek cobqkmfvu ymzqxl njhietr wvkdcihoif.',
        'status': 'published',
        'author': 'name',
        'display_time': '1990-08-24 12:01:11',
        'pageviews': 4924
      },
      {
        'id': '32000019990121685X',
        'title': 'Wncdlxk ovrnxsq wdgvegc rcbsjvpgzr rfvo vapi nqsotbq fqav llfbxpsjd acpsudaorn rexipl qtcqgr dyxqw yyssint brwkytbwg rqpelz hwksvf wkty mgvggssv uxyogk.',
        'status': 'published',
        'author': 'name',
        'display_time': '1975-07-17 16:34:33',
        'pageviews': 3922
      },
      {
        'id': '120000199711280466',
        'title': 'Wagndor eculkwaxu pqqt vvqmoqdk tbnsan qhxz cybesxcri vyxunlylgr fhaj dct lemlvqsjm ixnoodd mpvv ose ibpnjbn qwbveswx fgy qgltmbsv.',
        'status': 'draft',
        'author': 'name',
        'display_time': '1977-08-14 01:11:58',
        'pageviews': 4815
      },
      {
        'id': '990000201501243175',
        'title': 'Yuzyw umgf oedveufhil ibu rgqu ftax qisghthq ugezkqj kxyt ktey rlchhl txzx xkseddboab ijqkuzkq fmvs citic.',
        'status': 'draft',
        'author': 'name',
        'display_time': '1994-03-15 11:58:15',
        'pageviews': 4730
      },
      {
        'id': '520000199612134177',
        'title': 'Tmuchq fikwl cac icfmokb dsooc ljlhguq jjpfkixlf gcmxxt ervf bdvotc lrrkguv piqzmfzb.',
        'status': 'deleted',
        'author': 'name',
        'display_time': '1975-10-10 02:33:56',
        'pageviews': 1872
      },
      {
        'id': '440000197707051455',
        'title': 'Wgbv pgmognwn fqdkv hrvj ljjowjmeq ceqjb ikkigpej jtyi bkjdswdg ketcgtkc ypyf gbcxbmvnz imxms epvsvi xuwqaqo rmqwr wuzody ouorwrdf.',
        'status': 'deleted',
        'author': 'name',
        'display_time': '2001-06-21 03:11:24',
        'pageviews': 900
      },
      {
        'id': '410000199811134801',
        'title': 'Iophtcvof briv vbqx nqkzpbd vkycefcv pjcektust yrrw giu yppjoreo kelpnvluh qdbcwwq ymezo dosjfhzcv iupfi.',
        'status': 'published',
        'author': 'name',
        'display_time': '1982-12-24 17:11:07',
        'pageviews': 2738
      },
      {
        'id': '430000198505053332',
        'title': 'Yoqrf cknqpsw jlpqux wai cniqbme ajvcofs obtejf okhd wvuf pfd siupaqr hftqphqqx pokdl grbfr fdklppd aisxyayt sdxep hkxlmlkev.',
        'status': 'published',
        'author': 'name',
        'display_time': '1973-04-11 02:12:48',
        'pageviews': 1177
      },
      {
        'id': '220000200608075922',
        'title': 'Odemghppe zymlbhc ukbd rtfbbc oyha oltcm xyv utfdwqf bhrqmqr nqdjvmdtw yxyr.',
        'status': 'draft',
        'author': 'name',
        'display_time': '2004-04-19 19:10:26',
        'pageviews': 986
      },
      {
        'id': '500000199810153914',
        'title': 'Inwlgn tkfjxemjs ociwzi ibnulf iucwpkyg cfhhnhzy gibyf hmsup twipeosaz kexknd omzpqqe mqe.',
        'status': 'deleted',
        'author': 'name',
        'display_time': '2011-06-29 03:56:21',
        'pageviews': 384
      },
      {
        'id': '710000200212315244',
        'title': 'Qfnqkvksl hzzokbq kcbrxyv unhhl yeisb iegfa icsk ptojuovank pkcfhnk yxpf bbvkrewiqi hxq.',
        'status': 'deleted',
        'author': 'name',
        'display_time': '1993-07-18 13:20:35',
        'pageviews': 850
      },
      {
        'id': '410000198802133992',
        'title': 'Fmfyjvrc eadgmw hpquuighs vlpijx zjxdvh xujf svuhgn bul zubn xpjoedfxy pjstq vnesvb nicml nqopv tkdhtgdiw qczdqycm hcmku pfqglk mftxivxob.',
        'status': 'draft',
        'author': 'name',
        'display_time': '1984-02-08 10:21:27',
        'pageviews': 4345
      },
      {
        'id': '640000199207258720',
        'title': 'Mcfp fbagmxem njhq lstrj kxyqczzca ilsyvy slbnv dkxrre mvxyjbylr sdxqipb ccvfm wtoln.',
        'status': 'deleted',
        'author': 'name',
        'display_time': '2000-07-30 03:45:04',
        'pageviews': 1697
      },
      {
        'id': '410000199205143919',
        'title': 'Bblziohgch tvfgfho tnq vxtatoe cizaso gsybod lzwjs nld huuqvcj whurcmo uxpa jnq gmxkdpr.',
        'status': 'draft',
        'author': 'name',
        'display_time': '2011-07-13 21:18:31',
        'pageviews': 2751
      },
      {
        'id': '320000200409142313',
        'title': 'Mmryb ggpp hqhpd ijwln qjzdhxev oliv kihyef bbfmvy dis btwdjhds ncbnbdej mgr lggi veao kfwcjf sepdvmtm.',
        'status': 'draft',
        'author': 'name',
        'display_time': '1979-10-04 14:52:42',
        'pageviews': 4177
      },
      {
        'id': '360000199608028574',
        'title': 'Igxjtddtte kowshkl ehfb zjhhmziuv bqgykxlhl ouambfb jokwb iiqffsyn irgdxdwr yvg ojyebqgays.',
        'status': 'published',
        'author': 'name',
        'display_time': '1986-03-02 22:56:55',
        'pageviews': 893
      },
      {
        'id': '320000200510124574',
        'title': 'Pnffgeb nrcbrkwye hnzy xbmbkkxx ofoejznbr ladd rdhfhgk hkgdcjs ejyqv vlqstyq hqhd ptopic cnsswsttd wkevawdk.',
        'status': 'deleted',
        'author': 'name',
        'display_time': '1989-03-10 15:39:08',
        'pageviews': 3692
      },
      {
        'id': '810000198310046440',
        'title': 'Enjc njugpdl tlgdk kftokvv ympfl wldvmhj nbk chtftzop lrxe oxualpd eunmg drkr rcklyt wmqjxluhk.',
        'status': 'draft',
        'author': 'name',
        'display_time': '1987-04-05 09:51:02',
        'pageviews': 4105
      },
      {
        'id': '140000198405101975',
        'title': 'Ruvta ylgmck oqrq vnrj sqcynxenjj brqlo dsoslypi ibikohxbdy tcjjfdwm goc obnqf oupa uazh wveyciuyto lxfoluvwcv jnogoq opiuyh rteojmzn ewhnvnxl.',
        'status': 'draft',
        'author': 'name',
        'display_time': '1990-12-09 12:14:04',
        'pageviews': 2671
      },
      {
        'id': '36000020030128742X',
        'title': 'Msypnbp xxot qtrir ecf wyp nfxbe uxtq ggenouax rnryv ifmmvtan euixjqs ctpfvycnbd qwiqxj ynjmwgm tdfway.',
        'status': 'draft',
        'author': 'name',
        'display_time': '1981-07-04 15:12:05',
        'pageviews': 3372
      },
      {
        'id': '230000199111017176',
        'title': 'Byuoa sueprj dychjpks ocual drerccje mivs jnwhlll eqeggzdm khwixscxnc mpqqw kvk wcnnmpow lojeq jqzctaiwn ypnoy slx cyqvdehuf.',
        'status': 'deleted',
        'author': 'name',
        'display_time': '2002-11-23 13:22:13',
        'pageviews': 980
      },
      {
        'id': '140000197007178331',
        'title': 'Bdtq dpkn dpqtgx yrl jeopfpjubo ruwko snscgpbx pbqjenr gnfz tatqasc xepbt ewpmhh ptiwujctch liprxnnef phqujlebm.',
        'status': 'published',
        'author': 'name',
        'display_time': '1970-08-04 06:09:48',
        'pageviews': 995
      },
      {
        'id': '360000201001065432',
        'title': 'Bplwp kdinhf ebcrj zrqyhhbnic sdlvuebwnz bkku vorgas poveuxnd iydknzov kictyjy ekimxubop rjp lxlzhdtva aiqxhbgma fdm rfhknxrd zflnx.',
        'status': 'deleted',
        'author': 'name',
        'display_time': '1971-01-26 22:31:49',
        'pageviews': 3112
      },
      {
        'id': '210000199111175322',
        'title': 'Juwmlugn yjpcuxritf wqbbnuhy knq okhberxyxq ueensehojj jwxyiwhzyo rnyokvoij mond ysbjmide wxor vtnlk yojfvinmu jboo.',
        'status': 'draft',
        'author': 'name',
        'display_time': '2010-12-12 05:10:10',
        'pageviews': 2469
      },
      {
        'id': '330000198812277455',
        'title': 'Ppknoe stgvl bvtvirt wmocwrnjf jsb evsvgqlt vsghuytaqy gxegvacma iyl jdfqud ylhvfiogj xoidl.',
        'status': 'deleted',
        'author': 'name',
        'display_time': '1978-08-14 07:02:30',
        'pageviews': 521
      },
      {
        'id': '120000200303171717',
        'title': 'Opahq ssegusnj ivcoz jtrwdfagb siehkj nerddm ltstes jfpqmb tciqwrs srqgzqppge qwujjdnqr nnjd zvieor gocauubx.',
        'status': 'draft',
        'author': 'name',
        'display_time': '1984-06-16 18:54:50',
        'pageviews': 4604
      },
      {
        'id': '630000201201266170',
        'title': 'Kbmq byzrs dfbsr vod bdwtiefsv wjcqzc jibgen ctqi tnik lfdlvev nwsf uomlqkmy eylgekmm khsqm muyrldfjcn bttsmpjg nmlltynvs mliqjdgnto vpdtoxl.',
        'status': 'published',
        'author': 'name',
        'display_time': '1982-10-22 21:18:17',
        'pageviews': 2493
      },
      {
        'id': '450000198405017987',
        'title': 'Jjk wxvx sfvxmg lfidortd rslupsmg bcvmqkwiit mlbwhrse qkdrh clqfxctt cnadm wqczik bvavyplue.',
        'status': 'draft',
        'author': 'name',
        'display_time': '2015-04-20 18:43:05',
        'pageviews': 2916
      },
      {
        'id': '510000201001154214',
        'title': 'Fhkgb psfxesmty mnprqb ikqkvnke clr dicrwzxx sudnspgrl dfriezpkc tafsclus yhsmqpqxyk pbwbpgcusu mrgkoo hknbi vnnykr ezrpfjkmy rttfqek liusqq iynx.',
        'status': 'published',
        'author': 'name',
        'display_time': '1996-08-16 02:35:05',
        'pageviews': 2461
      },
      {
        'id': '520000199708268284',
        'title': 'Eyswimaf mcqv jsusqgf gnxdkhjrpw olpyyqr akpluzewm dpgcks krm jcckf xnose niieni wmhjzem.',
        'status': 'draft',
        'author': 'name',
        'display_time': '1985-04-12 14:37:40',
        'pageviews': 718
      }
    ]
  }
}*/
export function getList(params) {
  return dataList
}
