/**
 * Created by primos on 14-8-20.
 */
function customerLogin() {
    wsp = makeWSProxy(wsUrl2, function (evt) {
            var json = toJson(evt.data);
            if (json.h) {
                if (json.h["p0"] == "setting") {
                    if (json.h["p1"] == "socketInit") {
                        var accounts_bind_id = $("#customer_login_id").val();
                        var accounts_bind_token = $("#customer_login_token").val();
                        var accounts_bind_type = $("#customer_login_type").val();
                        var accounts_bind_token_arr = strToArr(accounts_bind_token)
                        bindFn(accounts_bind_id, accounts_bind_type, makeToken(accounts_bind_token_arr));
                    }
                } else if (json.h["p0"] == "accounts") {
                }
            }
        },
        function () {
            socketInit("zh_CN", "ios", "1.0.0", "web");
        }
    );
}
/**
 * 加载网页的时候连接socket,做相关初始化
 */
function connect() {
    wsp = makeWSProxy(wsUrl2, function (evt) {
            extractor(evt);
        },
        function () {
            wsp.initSocket("ios", "en_US", "1.0.0", "primos-pc", {
                auto: true,
                m: "版本初始化"
            });
        }
    );
}

/**
 * 获得url重连socket
 * @param wsUrl
 */
function reconnect(wsUrl) {
    var wsUrl = $("#system_wsUrl_url").val()
    wsp = makeWSProxy(wsUrl);
}

/**
 * 初始化数据
 */
function init() {
    register();
    connect();
    layoutInitializator();
    scrollIniter("moments", loadMoments);
}

/**
 绑定初始化
 */
function bindinit() {
    register();
    if (sessionStorage.login) {
        wsp = makeWSProxy(wsUrl2, function (evt) {
                extractor(evt);
            },
            function () {
                wsp.initSocket("ios", "en_US", "1.0.0", "primos-pc", {
                    auto: true,
                    m: "版本初始化"
                });
            }
        );
    } else {
        wsp = makeWSProxy(wsUrl2, function (evt) {
                extractor(evt);
            },
            function () {
                wsp.initSocket("ios", "en_US", "1.0.0", "primos-pc", {
                    auto: false,
                    m: "版本初始化"
                });
            }
        );
    }
    layoutInitializator();
    scrollIniter("moments", loadMoments);
}