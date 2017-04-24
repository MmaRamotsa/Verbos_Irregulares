const NUMINTENTOS = 3;
const MAXNUMVERBOS=5;
var arrVerbos = [];

var arrVerbos1 = [{infinitive:"be" ,past:"was / were" ,participle:"been" ,verbo:"ser o estar" ,estado:false},
{infinitive:"beat" ,past:"beat" ,participle:"beaten" ,verbo:"golpear" ,estado:false},
{infinitive:"become" ,past:"became" ,participle:"become" ,verbo:"convertirse" ,estado:false},
{infinitive:"begin" ,past:"began" ,participle:"begun" ,verbo:"comenzar" ,estado:false},
{infinitive:"bite" ,past:"bit" ,participle:"bitten" ,verbo:"morder" ,estado:false},
{infinitive:"break" ,past:"broke" ,participle:"broken" ,verbo:"romper" ,estado:false},
{infinitive:"bring" ,past:"brought" ,participle:"brought" ,verbo:"traer" ,estado:false},
{infinitive:"build" ,past:"built" ,participle:"built" ,verbo:"construir" ,estado:false},
{infinitive:"buy" ,past:"bought" ,participle:"bought" ,verbo:"comprar" ,estado:false},
{infinitive:"choose" ,past:"chose" ,participle:"chosen" ,verbo:"elegir" ,estado:false},
{infinitive:"come" ,past:"came" ,participle:"come" ,verbo:"venir" ,estado:false},
{infinitive:"cost" ,past:"cost" ,participle:"cost" ,verbo:"costar" ,estado:false},
{infinitive:"cut" ,past:"cut" ,participle:"cut" ,verbo:"cortar" ,estado:false},
{infinitive:"do" ,past:"did" ,participle:"done" ,verbo:"hacer" ,estado:false},
{infinitive:"draw" ,past:"drew" ,participle:"drawn" ,verbo:"dibujar" ,estado:false},
{infinitive:"dream" ,past:"dreamt/dreamed" ,participle:"dreamt/dreamed" ,verbo:"soñar" ,estado:false},
{infinitive:"drink" ,past:"drank" ,participle:"drunk" ,verbo:"beber" ,estado:false},
{infinitive:"drive" ,past:"drove" ,participle:"driven" ,verbo:"conducir" ,estado:false},
{infinitive:"eat" ,past:"ate" ,participle:"eaten" ,verbo:"comer" ,estado:false},
{infinitive:"fall" ,past:"fell" ,participle:"fallen" ,verbo:"caer" ,estado:false},
{infinitive:"feel" ,past:"felt" ,participle:"felt" ,verbo:"sentir(se)" ,estado:false},
{infinitive:"fight" ,past:"fought" ,participle:"fought" ,verbo:"pelear" ,estado:false},
{infinitive:"find" ,past:"found" ,participle:"found" ,verbo:"encontrar" ,estado:false},
{infinitive:"forget" ,past:"forgot" ,participle:"forgotten" ,verbo:"olvidar" ,estado:false},
{infinitive:"forgive" ,past:"forgave" ,participle:"forgiven" ,verbo:"perdonar" ,estado:false},
{infinitive:"freeze" ,past:"froze" ,participle:"frozen" ,verbo:"congelar" ,estado:false},
{infinitive:"get" ,past:"got" ,participle:"got" ,verbo:"tener u obtener" ,estado:false},
{infinitive:"give" ,past:"gave" ,participle:"given" ,verbo:"dar" ,estado:false},
{infinitive:"go" ,past:"went" ,participle:"gone" ,verbo:"ir" ,estado:false},
{infinitive:"hang" ,past:"hung" ,participle:"hung" ,verbo:"colgar" ,estado:false},
{infinitive:"have" ,past:"had" ,participle:"had" ,verbo:"tener/haber" ,estado:false},
{infinitive:"hear" ,past:"heard" ,participle:"heard" ,verbo:"oír" ,estado:false},
{infinitive:"hide" ,past:"hid" ,participle:"hidden" ,verbo:"esconder(se)" ,estado:false},
{infinitive:"hit" ,past:"hit" ,participle:"hit" ,verbo:"golpear" ,estado:false},
{infinitive:"hurt" ,past:"hurt" ,participle:"hurt" ,verbo:"herir o doler" ,estado:false},
{infinitive:"keep" ,past:"kept" ,participle:"kept" ,verbo:"guardar o mantener" ,estado:false},
{infinitive:"know" ,past:"knew" ,participle:"known" ,verbo:"saber" ,estado:false},
{infinitive:"learn" ,past:"learnt/learned" ,participle:"learnt/learned" ,verbo:"aprender" ,estado:false},
{infinitive:"leave" ,past:"left" ,participle:"left" ,verbo:"dejar o abandonar" ,estado:false},
{infinitive:"lend" ,past:"lent" ,participle:"lent" ,verbo:"prestar" ,estado:false},
{infinitive:"let" ,past:"let" ,participle:"let" ,verbo:"dejar o permitir" ,estado:false},
{infinitive:"lose" ,past:"lost" ,participle:"lost" ,verbo:"perder" ,estado:false},
{infinitive:"make" ,past:"made" ,participle:"made" ,verbo:"hacer o crear" ,estado:false},
{infinitive:"mean" ,past:"meant" ,participle:"meant" ,verbo:"significar" ,estado:false},
{infinitive:"meet" ,past:"met" ,participle:"met" ,verbo:"conocer o encontrar" ,estado:false},
{infinitive:"pay" ,past:"paid" ,participle:"paid" ,verbo:"pagar" ,estado:false},
{infinitive:"put" ,past:"put" ,participle:"put" ,verbo:"poner" ,estado:false},
{infinitive:"read" ,past:"read" ,participle:"read" ,verbo:"leer" ,estado:false},
{infinitive:"ride" ,past:"rode" ,participle:"ridden" ,verbo:"montar (en bici ¡, a caballo ...)" ,estado:false},
{infinitive:"ring" ,past:"rang" ,participle:"rung" ,verbo:"llamar por teléfono" ,estado:false},
{infinitive:"run" ,past:"ran" ,participle:"run" ,verbo:"correr" ,estado:false},
{infinitive:"say" ,past:"said" ,participle:"said" ,verbo:"decir" ,estado:false},
{infinitive:"see" ,past:"saw" ,participle:"seen" ,verbo:"ver" ,estado:false},
{infinitive:"sell" ,past:"sold" ,participle:"sold" ,verbo:"vender" ,estado:false},
{infinitive:"send" ,past:"sent" ,participle:"sent" ,verbo:"enviar" ,estado:false},
{infinitive:"shine" ,past:"shone" ,participle:"shone" ,verbo:"brillar" ,estado:false},
{infinitive:"shoot" ,past:"shot" ,participle:"shot" ,verbo:"disparar" ,estado:false},
{infinitive:"show" ,past:"showed" ,participle:"shown/showed" ,verbo:"mostrar" ,estado:false},
{infinitive:"sing" ,past:"sang" ,participle:"sung" ,verbo:"cantar" ,estado:false},
{infinitive:"sit" ,past:"sat" ,participle:"sat" ,verbo:"sentarse" ,estado:false},
{infinitive:"sleep" ,past:"slept" ,participle:"slept" ,verbo:"dormir" ,estado:false},
{infinitive:"slide" ,past:"slid" ,participle:"slid" ,verbo:"deslizar" ,estado:false},
{infinitive:"speak" ,past:"spoke" ,participle:"spoken" ,verbo:"hablar" ,estado:false},
{infinitive:"spell" ,past:"spelt/spelled" ,participle:"spelt/spelled" ,verbo:"deletrear" ,estado:false},
{infinitive:"spend" ,past:"spent" ,participle:"spent" ,verbo:"gastar o pasar tiempo" ,estado:false},
{infinitive:"spill" ,past:"spilt/spilled" ,participle:"spilt/spilled" ,verbo:"derramar" ,estado:false},
{infinitive:"split" ,past:"split" ,participle:"split" ,verbo:"partir o separar" ,estado:false},
{infinitive:"stand" ,past:"stood" ,participle:"stood" ,verbo:"estar de pie" ,estado:false},
{infinitive:"steal" ,past:"stole" ,participle:"stolen" ,verbo:"robar" ,estado:false},
{infinitive:"sting" ,past:"stung" ,participle:"stung" ,verbo:"picar (con aguijón)" ,estado:false},
{infinitive:"swim" ,past:"swam" ,participle:"swum" ,verbo:"nadar" ,estado:false},
{infinitive:"take" ,past:"took" ,participle:"taken" ,verbo:"tomar o coger" ,estado:false},
{infinitive:"teach" ,past:"taught" ,participle:"taught" ,verbo:"enseñar" ,estado:false},
{infinitive:"tear" ,past:"tore" ,participle:"torn" ,verbo:"romper, rasgar" ,estado:false},
{infinitive:"tell" ,past:"told" ,participle:"told" ,verbo:"decir o relatar" ,estado:false},
{infinitive:"think" ,past:"thought" ,participle:"thought" ,verbo:"pensar" ,estado:false},
{infinitive:"understand" ,past:"understood" ,participle:"understood" ,verbo:"entender" ,estado:false},
{infinitive:"wake" ,past:"woke" ,participle:"woken" ,verbo:"despertarse" ,estado:false},
{infinitive:"win" ,past:"won" ,participle:"won" ,verbo:"ganar" ,estado:false},
{infinitive:"write" ,past:"wrote" ,participle:"written" ,verbo:"escribir" ,estado:false}
]
//NIVEL INTERMEDIO
var arrVerbos2 = [{infinitive:"be" ,past:"was / were" ,participle:"been" ,verbo:"ser o estar" ,estado:false},
{infinitive:"beat" ,past:"beat" ,participle:"beaten" ,verbo:"golpear" ,estado:false},
{infinitive:"become" ,past:"became" ,participle:"become" ,verbo:"convertirse" ,estado:false},
{infinitive:"begin" ,past:"began" ,participle:"begun" ,verbo:"comenzar" ,estado:false},
{infinitive:"bite" ,past:"bit" ,participle:"bitten" ,verbo:"morder" ,estado:false},
{infinitive:"bleed" ,past:"bled" ,participle:"bled" ,verbo:"sangrar" ,estado:false},
{infinitive:"break" ,past:"broke" ,participle:"broken" ,verbo:"romper" ,estado:false},
{infinitive:"bring" ,past:"brought" ,participle:"brought" ,verbo:"traer" ,estado:false},
{infinitive:"build" ,past:"built" ,participle:"built" ,verbo:"construir" ,estado:false},
{infinitive:"buy" ,past:"bought" ,participle:"bought" ,verbo:"comprar" ,estado:false},
{infinitive:"catch" ,past:"caught" ,participle:"caught" ,verbo:"atrapar" ,estado:false},
{infinitive:"choose" ,past:"chose" ,participle:"chosen" ,verbo:"elegir" ,estado:false},
{infinitive:"come" ,past:"came" ,participle:"come" ,verbo:"venir" ,estado:false},
{infinitive:"cost" ,past:"cost" ,participle:"cost" ,verbo:"costar" ,estado:false},
{infinitive:"cut" ,past:"cut" ,participle:"cut" ,verbo:"cortar" ,estado:false},
{infinitive:"deal" ,past:"dealt" ,participle:"dealt" ,verbo:"comerciar o hacer tratos" ,estado:false},
{infinitive:"do" ,past:"did" ,participle:"done" ,verbo:"hacer" ,estado:false},
{infinitive:"draw" ,past:"drew" ,participle:"drawn" ,verbo:"dibujar" ,estado:false},
{infinitive:"dream" ,past:"dreamt/dreamed" ,participle:"dreamt/dreamed" ,verbo:"soñar" ,estado:false},
{infinitive:"drink" ,past:"drank" ,participle:"drunk" ,verbo:"beber" ,estado:false},
{infinitive:"drive" ,past:"drove" ,participle:"driven" ,verbo:"conducir" ,estado:false},
{infinitive:"eat" ,past:"ate" ,participle:"eaten" ,verbo:"comer" ,estado:false},
{infinitive:"fall" ,past:"fell" ,participle:"fallen" ,verbo:"caer" ,estado:false},
{infinitive:"feel" ,past:"felt" ,participle:"felt" ,verbo:"sentir(se)" ,estado:false},
{infinitive:"fight" ,past:"fought" ,participle:"fought" ,verbo:"pelear" ,estado:false},
{infinitive:"find" ,past:"found" ,participle:"found" ,verbo:"encontrar" ,estado:false},
{infinitive:"fly" ,past:"flew" ,participle:"flown" ,verbo:"volar" ,estado:false},
{infinitive:"forget" ,past:"forgot" ,participle:"forgotten" ,verbo:"olvidar" ,estado:false},
{infinitive:"forgive" ,past:"forgave" ,participle:"forgiven" ,verbo:"perdonar" ,estado:false},
{infinitive:"freeze" ,past:"froze" ,participle:"frozen" ,verbo:"congelar" ,estado:false},
{infinitive:"get" ,past:"got" ,participle:"got" ,verbo:"tener u obtener" ,estado:false},
{infinitive:"give" ,past:"gave" ,participle:"given" ,verbo:"dar" ,estado:false},
{infinitive:"go" ,past:"went" ,participle:"gone" ,verbo:"ir" ,estado:false},
{infinitive:"grow" ,past:"grew" ,participle:"grown" ,verbo:"crecer" ,estado:false},
{infinitive:"hang" ,past:"hung" ,participle:"hung" ,verbo:"colgar" ,estado:false},
{infinitive:"have" ,past:"had" ,participle:"had" ,verbo:"tener" ,estado:false},
{infinitive:"hear" ,past:"heard" ,participle:"heard" ,verbo:"oír" ,estado:false},
{infinitive:"hide" ,past:"hid" ,participle:"hidden" ,verbo:"esconder(se)" ,estado:false},
{infinitive:"hit" ,past:"hit" ,participle:"hit" ,verbo:"golpear" ,estado:false},
{infinitive:"hold" ,past:"held" ,participle:"held" ,verbo:"agarrar sostener o mantener" ,estado:false},
{infinitive:"hurt" ,past:"hurt" ,participle:"hurt" ,verbo:"herir o doler" ,estado:false},
{infinitive:"keep" ,past:"kept" ,participle:"kept" ,verbo:"guardar o mantener" ,estado:false},
{infinitive:"know" ,past:"knew" ,participle:"known" ,verbo:"saber" ,estado:false},
{infinitive:"lead" ,past:"led" ,participle:"led" ,verbo:"encabezar o liderar" ,estado:false},
{infinitive:"learn" ,past:"learnt/ learned" ,participle:"learnt/ learned" ,verbo:"aprender" ,estado:false},
{infinitive:"leave" ,past:"left" ,participle:"left" ,verbo:"dejar o abandonar" ,estado:false},
{infinitive:"lend" ,past:"lent" ,participle:"lent" ,verbo:"prestar" ,estado:false},
{infinitive:"let" ,past:"let" ,participle:"let" ,verbo:"dejar o permitir" ,estado:false},
{infinitive:"lose" ,past:"lost" ,participle:"lost" ,verbo:"perder" ,estado:false},
{infinitive:"make" ,past:"made" ,participle:"made" ,verbo:"hacer o crear" ,estado:false},
{infinitive:"mean" ,past:"meant" ,participle:"meant" ,verbo:"significar" ,estado:false},
{infinitive:"meet" ,past:"met" ,participle:"met" ,verbo:"conocer o encontrar" ,estado:false},
{infinitive:"pay" ,past:"paid" ,participle:"paid" ,verbo:"pagar" ,estado:false},
{infinitive:"put" ,past:"put" ,participle:"put" ,verbo:"poner" ,estado:false},
{infinitive:"read" ,past:"read" ,participle:"read" ,verbo:"leer" ,estado:false},
{infinitive:"ride" ,past:"rode" ,participle:"ridden" ,verbo:"montar (en bici ¡, a caballo ...)" ,estado:false},
{infinitive:"ring" ,past:"rang" ,participle:"rung" ,verbo:"llamar por teléfono" ,estado:false},
{infinitive:"rise" ,past:"rose" ,participle:"risen" ,verbo:"elevar o levantar" ,estado:false},
{infinitive:"run" ,past:"ran" ,participle:"run" ,verbo:"correr" ,estado:false},
{infinitive:"say" ,past:"said" ,participle:"said" ,verbo:"decir" ,estado:false},
{infinitive:"see" ,past:"saw" ,participle:"seen" ,verbo:"ver" ,estado:false},
{infinitive:"sell" ,past:"sold" ,participle:"sold" ,verbo:"vender" ,estado:false},
{infinitive:"send" ,past:"sent" ,participle:"sent" ,verbo:"enviar" ,estado:false},
{infinitive:"set" ,past:"set" ,participle:"set" ,verbo:"fijar" ,estado:false},
{infinitive:"shake" ,past:"shook" ,participle:"shaken" ,verbo:"sacudir o batir" ,estado:false},
{infinitive:"shine" ,past:"shone" ,participle:"shone" ,verbo:"brillar" ,estado:false},
{infinitive:"shoot" ,past:"shot" ,participle:"shot" ,verbo:"disparar" ,estado:false},
{infinitive:"show" ,past:"showed" ,participle:"shown/showed" ,verbo:"mostrar" ,estado:false},
{infinitive:"shut" ,past:"shut" ,participle:"shut" ,verbo:"cerrar" ,estado:false},
{infinitive:"sing" ,past:"sang" ,participle:"sung" ,verbo:"cantar" ,estado:false},
{infinitive:"sink" ,past:"sank" ,participle:"sunk" ,verbo:"hundir" ,estado:false},
{infinitive:"sit" ,past:"sat" ,participle:"sat" ,verbo:"sentarse" ,estado:false},
{infinitive:"sleep" ,past:"slept" ,participle:"slept" ,verbo:"dormir" ,estado:false},
{infinitive:"slide" ,past:"slid" ,participle:"slid" ,verbo:"deslizar" ,estado:false},
{infinitive:"speak" ,past:"spoke" ,participle:"spoken" ,verbo:"hablar" ,estado:false},
{infinitive:"spell" ,past:"spelt/ spelled" ,participle:"spelt/ spelled" ,verbo:"deletrear" ,estado:false},
{infinitive:"spend" ,past:"spent" ,participle:"spent" ,verbo:"gastar o pasar tiempo" ,estado:false},
{infinitive:"spill" ,past:"spilt/ spilled" ,participle:"spilt/ spilled" ,verbo:"derramar" ,estado:false},
{infinitive:"split" ,past:"split" , participle:"split" ,verbo:"partir o separar" ,estado:false},
{infinitive:"spread" ,past:"spread" ,participle:"spread" ,verbo:"extenderse" ,estado:false},
{infinitive:"stand" ,past:"stood" ,participle:"stood" ,verbo:"estar de pie" ,estado:false},
{infinitive:"steal" ,past:"stole" ,participle:"stolen" ,verbo:"robar" ,estado:false},
{infinitive:"sting" ,past:"stung" ,participle:"stung" ,verbo:"picar (con aguijón)" ,estado:false},
{infinitive:"stink" ,past:"stank/ stunk" ,participle:"stunk" ,verbo:"apestar" ,estado:false},
{infinitive:"strike" ,past:"struck" ,participle:"struck" ,verbo:"golpear" ,estado:false},
{infinitive:"swear" ,past:"swore" ,participle:"sworn" ,verbo:"jurar" ,estado:false},
{infinitive:"swim" ,past:"swam" ,participle:"swum" ,verbo:"nadar" ,estado:false},
{infinitive:"take" ,past:"took" ,participle:"taken" ,verbo:"tomar o coger" ,estado:false},
{infinitive:"teach" ,past:"taught" ,participle:"taught" ,verbo:"enseñar" ,estado:false},
{infinitive:"tear" ,past:"tore" ,participle:"torn" ,verbo:"romper" ,estado:false},
{infinitive:"tell" ,past:"told" ,participle:"told" ,verbo:"decir o relatar" ,estado:false},
{infinitive:"think" ,past:"thought" ,participle:"thought" ,verbo:"pensar" ,estado:false},
{infinitive:"throw" ,past:"threw" ,participle:"thrown" ,verbo:"lanzar" ,estado:false},
{infinitive:"understand" ,past:"understood" ,participle:"understood" ,verbo:"entender" ,estado:false},
{infinitive:"wake" ,past:"woke" ,participle:"woken" ,verbo:"despertarse" ,estado:false},
{infinitive:"wear" ,past:"wore" ,participle:"worn" ,verbo:"llevar puesto o vestir" ,estado:false},
{infinitive:"win" ,past:"won" ,participle:"won" ,verbo:"ganar" ,estado:false},
{infinitive:"write" ,past:"wrote" ,participle:"written" ,verbo:"escribir" ,estado:false}
]
//NIVEL EXPERTO
var arrVerbos3 = [{infinitive:"arise" ,past:"arose" ,participle:"arisen" ,verbo:"surgir o levantarse" ,estado:false},
{infinitive:"be" ,past:"was / were" ,participle:"been" ,verbo:"ser o estar" ,estado:false},
{infinitive:"beat" ,past:"beat" ,participle:"beaten" ,verbo:"golpear" ,estado:false},
{infinitive:"become" ,past:"became" ,participle:"become" ,verbo:"convertirse" ,estado:false},
{infinitive:"begin" ,past:"began" ,participle:"begun" ,verbo:"comenzar" ,estado:false},
{infinitive:"bet" ,past:"bet/betted" ,participle:"bet/betted" ,verbo:"apostar" ,estado:false},
{infinitive:"bite" ,past:"bit" ,participle:"bitten" ,verbo:"morder" ,estado:false},
{infinitive:"bleed" ,past:"bled" ,participle:"bled" ,verbo:"sangrar" ,estado:false},
{infinitive:"blow" ,past:"blew" ,participle:"blown" ,verbo:"soplar" ,estado:false},
{infinitive:"break" ,past:"broke" ,participle:"broken" ,verbo:"romper" ,estado:false},
{infinitive:"bring" ,past:"brought" ,participle:"brought" ,verbo:"traer" ,estado:false},
{infinitive:"build" ,past:"built" ,participle:"built" ,verbo:"construir" ,estado:false},
{infinitive:"buy" ,past:"bought" ,participle:"bought" ,verbo:"comprar" ,estado:false},
{infinitive:"catch" ,past:"caught" ,participle:"caught" ,verbo:"atrapar" ,estado:false},
{infinitive:"choose" ,past:"chose" ,participle:"chosen" ,verbo:"elegir" ,estado:false},
{infinitive:"come" ,past:"came" ,participle:"come" ,verbo:"venir" ,estado:false},
{infinitive:"cost" ,past:"cost" ,participle:"cost" ,verbo:"costar" ,estado:false},
{infinitive:"creep" ,past:"crept" ,participle:"crept" ,verbo:"arrastrarse" ,estado:false},
{infinitive:"cut" ,past:"cut" ,participle:"cut" ,verbo:"cortar" ,estado:false},
{infinitive:"deal" ,past:"dealt" ,participle:"dealt" ,verbo:"comerciar o hacer tratos" ,estado:false},
{infinitive:"do" ,past:"did" ,participle:"done" ,verbo:"hacer" ,estado:false},
{infinitive:"draw" ,past:"drew" ,participle:"drawn" ,verbo:"dibujar" ,estado:false},
{infinitive:"dream" ,past:"dreamt/dreamed" ,participle:"dreamt/dreamed" ,verbo:"soñar" ,estado:false},
{infinitive:"drink" ,past:"drank" ,participle:"drunk" ,verbo:"beber" ,estado:false},
{infinitive:"drive" ,past:"drove" ,participle:"driven" ,verbo:"conducir" ,estado:false},
{infinitive:"eat" ,past:"ate" ,participle:"eaten" ,verbo:"comer" ,estado:false},
{infinitive:"fall" ,past:"fell" ,participle:"fallen" ,verbo:"caer" ,estado:false},
{infinitive:"feed" ,past:"fed" ,participle:"fed" ,verbo:"alimentar" ,estado:false},
{infinitive:"feel" ,past:"felt" ,participle:"felt" ,verbo:"sentir(se)" ,estado:false},
{infinitive:"fight" ,past:"fought" ,participle:"fought" ,verbo:"pelear" ,estado:false},
{infinitive:"find" ,past:"found" ,participle:"found" ,verbo:"encontrar" ,estado:false},
{infinitive:"flee" ,past:"fled" ,participle:"fled" ,verbo:"huir" ,estado:false},
{infinitive:"fly" ,past:"flew" ,participle:"flown" ,verbo:"volar" ,estado:false},
{infinitive:"forget" ,past:"forgot" ,participle:"forgotten" ,verbo:"olvidar" ,estado:false},
{infinitive:"forgive" ,past:"forgave" ,participle:"forgiven" ,verbo:"perdonar" ,estado:false},
{infinitive:"forsake" ,past:"forsook" ,participle:"forsaken" ,verbo:"abandonar" ,estado:false},
{infinitive:"freeze" ,past:"froze" ,participle:"frozen" ,verbo:"congelar" ,estado:false},
{infinitive:"get" ,past:"got" ,participle:"got" ,verbo:"tener u obtener" ,estado:false},
{infinitive:"give" ,past:"gave" ,participle:"given" ,verbo:"dar" ,estado:false},
{infinitive:"go" ,past:"went" ,participle:"gone" ,verbo:"ir" ,estado:false},
{infinitive:"grind" ,past:"ground" ,participle:"ground" ,verbo:"moler" ,estado:false},
{infinitive:"grow" ,past:"grew" ,participle:"grown" ,verbo:"crecer" ,estado:false},
{infinitive:"hang" ,past:"hung" ,participle:"hung" ,verbo:"colgar" ,estado:false},
{infinitive:"have" ,past:"had" ,participle:"had" ,verbo:"tener" ,estado:false},
{infinitive:"hear" ,past:"heard" ,participle:"heard" ,verbo:"oír" ,estado:false},
{infinitive:"hide" ,past:"hid" ,participle:"hidden" ,verbo:"esconder(se)" ,estado:false},
{infinitive:"hit" ,past:"hit" ,participle:"hit" ,verbo:"golpear" ,estado:false},
{infinitive:"hold" ,past:"held" ,participle:"held" ,verbo:"agarrar sostener o mantener" ,estado:false},
{infinitive:"hurt" ,past:"hurt" ,participle:"hurt" ,verbo:"herir o doler" ,estado:false},
{infinitive:"keep" ,past:"kept" ,participle:"kept" ,verbo:"guardar o mantener" ,estado:false},
{infinitive:"kneel" ,past:"knelt" ,participle:"knelt" ,verbo:"arrodillarse" ,estado:false},
{infinitive:"know" ,past:"knew" ,participle:"known" ,verbo:"saber" ,estado:false},
{infinitive:"lead" ,past:"led" ,participle:"led" ,verbo:"encabezar o liderar" ,estado:false},
{infinitive:"learn" ,past:"learnt/learned" ,participle:"learnt/learned" ,verbo:"aprender" ,estado:false},
{infinitive:"leave" ,past:"left" ,participle:"left" ,verbo:"dejar o abandonar" ,estado:false},
{infinitive:"lend" ,past:"lent" ,participle:"lent" ,verbo:"prestar" ,estado:false},
{infinitive:"let" ,past:"let" ,participle:"let" ,verbo:"dejar o permitir" ,estado:false},
{infinitive:"lie" ,past:"lay" ,participle:"lain" ,verbo:"yacer" ,estado:false},
{infinitive:"lose" ,past:"lost" ,participle:"lost" ,verbo:"perder" ,estado:false},
{infinitive:"make" ,past:"made" ,participle:"made" ,verbo:"hacer o crear" ,estado:false},
{infinitive:"mean" ,past:"meant" ,participle:"meant" ,verbo:"significar" ,estado:false},
{infinitive:"meet" ,past:"met" ,participle:"met" ,verbo:"conocer o encontrar" ,estado:false},
{infinitive:"pay" ,past:"paid" ,participle:"paid" ,verbo:"pagar" ,estado:false},
{infinitive:"put" ,past:"put" ,participle:"put" ,verbo:"poner" ,estado:false},
{infinitive:"quit" ,past:"quit/quitted" ,participle:"quit/quitted" ,verbo:"abandonar" ,estado:false},
{infinitive:"read" ,past:"read" ,participle:"read" ,verbo:"leer" ,estado:false},
{infinitive:"ride" ,past:"rode" ,participle:"ridden" ,verbo:"montar (en bici ¡, a caballo ...)" ,estado:false},
{infinitive:"ring" ,past:"rang" ,participle:"rung" ,verbo:"llamar por teléfono" ,estado:false},
{infinitive:"rise" ,past:"rose" ,participle:"risen" ,verbo:"elevar o levantar" ,estado:false},
{infinitive:"run" ,past:"ran" ,participle:"run" ,verbo:"correr" ,estado:false},
{infinitive:"say" ,past:"said" ,participle:"said" ,verbo:"decir" ,estado:false},
{infinitive:"see" ,past:"saw" ,participle:"seen" ,verbo:"ver" ,estado:false},
{infinitive:"sell" ,past:"sold" ,participle:"sold" ,verbo:"vender" ,estado:false},
{infinitive:"send" ,past:"sent" ,participle:"sent" ,verbo:"enviar" ,estado:false},
{infinitive:"set" ,past:"set" ,participle:"set" ,verbo:"fijar" ,estado:false},
{infinitive:"sew" ,past:"sewed" ,participle:"sewn/sewed" ,verbo:"coser" ,estado:false},
{infinitive:"shake" ,past:"shook" ,participle:"shaken" ,verbo:"sacudir o batir" ,estado:false},
{infinitive:"shine" ,past:"shone" ,participle:"shone" ,verbo:"brillar" ,estado:false},
{infinitive:"shoot" ,past:"shot" ,participle:"shot" ,verbo:"disparar" ,estado:false},
{infinitive:"show" ,past:"showed" ,participle:"shown/showed" ,verbo:"mostrar" ,estado:false},
{infinitive:"shrink" ,past:"shrank/shrunk" ,participle:"shrunk" ,verbo:"encoger" ,estado:false},
{infinitive:"shut" ,past:"shut" ,participle:"shut" ,verbo:"cerrar" ,estado:false},
{infinitive:"sing" ,past:"sang" ,participle:"sung" ,verbo:"cantar" ,estado:false},
{infinitive:"sink" ,past:"sank" ,participle:"sunk" ,verbo:"hundir" ,estado:false},
{infinitive:"sit" ,past:"sat" ,participle:"sat" ,verbo:"sentarse" ,estado:false},
{infinitive:"sleep" ,past:"slept" ,participle:"slept" ,verbo:"dormir" ,estado:false},
{infinitive:"slide" ,past:"slid" ,participle:"slid" ,verbo:"deslizar" ,estado:false},
{infinitive:"sow" ,past:"sowed" ,participle:"sown/sowed" ,verbo:"sembrar" ,estado:false},
{infinitive:"speak" ,past:"spoke" ,participle:"spoken" ,verbo:"hablar" ,estado:false},
{infinitive:"spell" ,past:"spelt/spelled" ,participle:"spelt/spelled" ,verbo:"deletrear" ,estado:false},
{infinitive:"spend" ,past:"spent" ,participle:"spent" ,verbo:"gastar o pasar tiempo" ,estado:false},
{infinitive:"spill" ,past:"spilt/spilled" ,participle:"spilt/spilled" ,verbo:"derramar" ,estado:false},
{infinitive:"split" ,past:"split" ,participle:"split" ,verbo:"partir o separar" ,estado:false},
{infinitive:"spoil" ,past:"spoilt/spoiled" ,participle:"spoilt/spoiled" ,verbo:"estropear" ,estado:false},
{infinitive:"spread" ,past:"spread" ,participle:"spread" ,verbo:"extenderse" ,estado:false},
{infinitive:"stand" ,past:"stood" ,participle:"stood" ,verbo:"estar de pie" ,estado:false},
{infinitive:"steal" ,past:"stole" ,participle:"stolen" ,verbo:"robar" ,estado:false},
{infinitive:"sting" ,past:"stung" ,participle:"stung" ,verbo:"picar (con aguijón)" ,estado:false},
{infinitive:"stink" ,past:"stank/stunk" ,participle:"stunk" ,verbo:"apestar" ,estado:false},
{infinitive:"strike" ,past:"struck" ,participle:"struck" ,verbo:"golpear" ,estado:false},
{infinitive:"swear" ,past:"swore" ,participle:"sworn" ,verbo:"jurar" ,estado:false},
{infinitive:"sweep" ,past:"swept" ,participle:"swept" ,verbo:"barrer" ,estado:false},
{infinitive:"swim" ,past:"swam" ,participle:"swum" ,verbo:"nadar" ,estado:false},
{infinitive:"take" ,past:"took" ,participle:"taken" ,verbo:"tomar o coger" ,estado:false},
{infinitive:"teach" ,past:"taught" ,participle:"taught" ,verbo:"enseñar" ,estado:false},
{infinitive:"tear" ,past:"tore" ,participle:"torn" ,verbo:"romper" ,estado:false},
{infinitive:"tell" ,past:"told" ,participle:"told" ,verbo:"decir o relatar" ,estado:false},
{infinitive:"think" ,past:"thought" ,participle:"thought" ,verbo:"pensar" ,estado:false},
{infinitive:"throw" ,past:"threw" ,participle:"thrown" ,verbo:"lanzar" ,estado:false},
{infinitive:"tread" ,past:"trode" ,participle:"trodden/trod" ,verbo:"pisar" ,estado:false},
{infinitive:"understand" ,past:"understood" ,participle:"understood" ,verbo:"entender" ,estado:false},
{infinitive:"wake" ,past:"woke" ,participle:"woken" ,verbo:"despertarse" ,estado:false},
{infinitive:"wear" ,past:"wore" ,participle:"worn" ,verbo:"llevar puesto o vestir" ,estado:false},
{infinitive:"weave" ,past:"wove" ,participle:"woven" ,verbo:"tejer" ,estado:false},
{infinitive:"weep" ,past:"wept" ,participle:"wept" ,verbo:"llorar" ,estado:false},
{infinitive:"win" ,past:"won" ,participle:"won" ,verbo:"ganar" ,estado:false},
{infinitive:"wring" ,past:"wrung" ,participle:"wrung" ,verbo:"retorcer" ,estado:false},
{infinitive:"write" ,past:"wrote" ,participle:"written" ,verbo:"escribir" ,estado:false}
]

//-------------------------------------------------------------------------------
$(document).ready(function(){
	$("#menunivel").hide();

	$("#menunivel").slideDown("slow");

	$("#puntuacion").html("0");

	$("#jugar").click(empiezaJuego);

	$("#btnOK").click(validaInfinitivo);
});
//-------------------------------------------------------------------------------
//Selección del nivel de juego
function aplicaNivel(n){
	if (n=="1"){
		arrVerbos = arrVerbos1;
		console.log("Nivel:PRINCIPIANTE-->" + arrVerbos.length);
	} else if (n=="2"){
		arrVerbos = arrVerbos2;
	} else {
		arrVerbos = arrVerbos3;
	}
	$("#menunivel").css("display", "none");
	$("#tarjetaVerbo").css("visibility","visible");
	$("#tarjetaVerbo").css("display","block");
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

var puntos=0;
var indice; //índice del verbo elegido en el array de verbos
var intentos=0; //intentos fallidos
var numfallos=0; //fallos
var numverbosmostrados=0; //número de verbos que se van jugando. Máximo 30.

//Al pulsar el PLAY empieza el juego mostrando un verbo en español
function empiezaJuego(){
	numverbosmostrados++;
	console.log("Número de verbos mostrados:" + numverbosmostrados);
	if (numverbosmostrados==MAXNUMVERBOS+1){
		//GAME OVER
		gameOver();
	} else {
		//Inhabilitamos el botón PLAY y habilitamos el OK
		$("#jugar").prop("disabled",true);
		$("#btnOK").prop("disabled",false);
		//Vaciamos las posibles tarjetas de verbos
		$("#div2").empty();
		$("#div1").empty();

		$("#div1").append('<div id="div11"></div>');

		//Si hay algo escrito en el campo de respuesta lo borra y pone el foco
		$("#infinitivoESP").val("");
		document.getElementById("infinitivoESP").focus();

		//Muestra el campo para introducir el verbo en inglés
		$("#diventrada").css("visibility","visible");
		$("#diventrada").css("display","block");
		//Saca un verbo al azar y comprueba que no haya salido antes verificando que el estado es false.
		indice = Math.round(arrVerbos.length * Math.random());

		haSalido = arrVerbos[indice].estado;
		while (haSalido){
			indice = Math.round(arrVerbos.length * Math.random());
			haSalido = arrVerbos[indice].estado;
		}
		//Inicializa la varioable intentos (número de veces que se responde al mismo verbo).
		intentos=0;
		arrVerbos[indice].estado="true";
		$("#verboSP").html(arrVerbos[indice].verbo.toUpperCase());
		//De momento oculta los iconos que indican que la respuesta ha sido buena o mala
		$("#ok").css("visibility","hidden");
		$("#mal").css("visibility","hidden");
	}
}

//Al pulsar OK se debe comprobar si el infinitivo que se ha introducido
//se corresponde con el verbo que se había mostrado
function validaInfinitivo(){
	var infinitivo = $("#infinitivoESP").val();
	infinitivo = infinitivo.trim().toUpperCase();
	//Se inhabilita el botón OK
	$("#btnOK").prop("disabled",true);
	//Si el verbo es correcto se realizan las siguientes accciones:
	// - Se suman 10 puntos al marcador
	// - Se muestra el icono pulgar hacia arriba
	// - Se colocan cartas de verbos en pasado y en participio pasado
	// - Se habilita el botón PLAY
	if (infinitivo == arrVerbos[indice].infinitive.toUpperCase()){
		sumaPuntos();
		muestraOK(true);
		colocaCartas(indice);
		//Habilitamos el botón PLAY
		$("#jugar").prop("disabled",false);
	} else {
		//Si el verbo es incorrecto se realizan las siguientes accciones:
		// - Se comprueban los intentos que se han hecho. 
		// 				-Si ya se ha llegado a 3 
		// 					- Se restan puntos
		// 					- Se cambia de verbo
		//				-Si no: se habilita el botón OK
		muestraOK(false);
		if (intentos==3){
			restaPuntos();
			if (numfallos==5){
				gameOver();
			} else{
				empiezaJuego();
			}
		} else{
			$("#btnOK").prop("disabled",false);
		}
		return false;
	}
}

//Coloca las cartas al azar en el div inferior
function colocaCartas(i){
	var numVerbos = arrVerbos.length;
	var bloque = $("#div2");
	var j =Math.round(numVerbos * Math.random());
	var k;
	var lineas = [];

	bloque.css("visibility","visible");
	$("#div11").html('<div id="drag' + i +'0" class="card w3-cyan" >' + arrVerbos[i].infinitive.toUpperCase() + '</div>');
	
	while (j==i){
		j =Math.round(numVerbos * Math.random());
	}
	k =Math.round(numVerbos * Math.random());
	while (k==i || k==j){
		k =Math.round(numVerbos * Math.random());
	}

	lineas[0] = '<div id="drag' + Math.min(i,j,k) +'1" class="card w3-red" draggable="true" ondragstart="drag(event)" >' + arrVerbos[Math.min(i,j,k)].past.toUpperCase() + '</div>';
	lineas[1] = '<div id="drag' + Math.min(i,j,k) +'2" class="card w3-red" draggable="true" ondragstart="drag(event)" >' + arrVerbos[Math.min(i,j,k)].participle.toUpperCase() + '</div>';
	lineas[2] = '<div id="drag' + valorMedio(i,j,k) +'1" class="card w3-red" draggable="true" ondragstart="drag(event)" >' + arrVerbos[valorMedio(i,j,k)].past.toUpperCase() + '</div>';
	lineas[3] = '<div id="drag' + valorMedio(i,j,k) +'2" class="card w3-red" draggable="true" ondragstart="drag(event)" >' + arrVerbos[valorMedio(i,j,k)].participle.toUpperCase() + '</div>';
	lineas[4] = '<div id="drag' + Math.max(i,j,k) +'1" class="card w3-red" draggable="true" ondragstart="drag(event)" >' + arrVerbos[Math.max(i,j,k)].past.toUpperCase() + '</div>';
	lineas[5] = '<div id="drag' + Math.max(i,j,k) +'2" class="card w3-red" draggable="true" ondragstart="drag(event)" >' + arrVerbos[Math.max(i,j,k)].participle.toUpperCase() + '</div>';

	bloque.html("");
	for (var cc =0; cc<6; cc++){
		bloque.html(bloque.html() + lineas[cc]);
	}
}

function valorMedio(a,b,c){
	var max=Math.max(a,b,c);
	if (max==a){
		return Math.max(b,c);
	} else if (max==b){
		return Math.max(a,c);
	} else {
		return Math.max(a,b);
	}
}
//Suma puntos cuando se acierta y actualiza el marcador
function sumaPuntos(){
	if (intentos==0){
		puntos +=10;
	} else{
		puntos += (10-intentos);
	}
	$("#puntuacion").html(puntos);
}

//Resta puntos cuando se ha fallado
function restaPuntos(){
	puntos = puntos - 10;
	numfallos = numfallos+1;
	console.log("Número de fallos:" + numfallos);
	$("#puntuacion").html(puntos);
	if (numfallos==5){
		console.log("Número de fallos es 5");
	}
}

 function muestraOK(bool){
 	if (bool){
 		$("#ok").html('<i class="fa fa-thumbs-o-up fa-3x" aria-hidden="true"></i>');
 		$("#intentos").css("visibility","hidden");
 	} else {
 		intentos ++;
 		$("#ok").html('<i class="fa fa-thumbs-o-down fa-3x" aria-hidden="true"></i>');
 		$("#intentos").html("You can try " + (3-intentos) + " more times.");
 		$("#intentos").css("visibility","visible");
 	}
 	$("#ok").css("visibility","visible");
 }

 function inicializa(){
 	location.reload();
 }

function gameOver(){
		var texto = "You've got " + puntos + " points."
		if (puntos>MAXNUMVERBOS*8){
			alertify.alert("CONGRATULATIONS!!","AWESOME!! " + texto);
		} else if (puntos<MAXNUMVERBOS*10/2) {
			alertify.alert("SO SORRY!!", texto + " You must spend a little more time learning.");
		}
		else{
			alertify.alert("GOOD!!", texto + " You're getting better!");
		}
		//alertify.confirm("Wanna play again?");
		// if (alertify.confirm("Wanna play again?")){
		// 	inicializa();
		// }
}