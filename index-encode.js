// ==UserScript==
// @name        抖音视频分享链接自动全屏播放 - douyin.com
// @namespace   Violentmonkey Scripts
// @grant       none
// @version     0.01
// @author      ruananqing
// @description 2020/3/20 下午12:42:05
// ==/UserScript==
var _0x2961 = ['jsjiami.com.v6', 'jsjiVamil.comJ.vf6QXyneObSMY==', 'woHDqBHCmyLClVPCoCQ=', 'eD7CklB8', 'WBZRwqfChw==', 'dDdUAF5QIA==', 'ZU/CmcOMw7LCs8K6XQ==', 'EsO8wpAiw7bDp0Uj', 'WzVlAw=='];
(function (_0x17d07b, _0x53a93b, _0x297c91) {
    var _0x309723 = function (_0x3441a6, _0x3bc5c7, _0x177033, _0x261126) {
        _0x3bc5c7 = _0x3bc5c7 >> 0x8;
        if (_0x3bc5c7 < _0x3441a6) {
            while (--_0x3441a6) {
                _0x261126 = _0x17d07b['shift']();
                if (_0x3bc5c7 === _0x3441a6) {
                    _0x3bc5c7 = _0x261126;
                    _0x177033 = _0x17d07b['shift']();
                } else if (_0x177033['replace'](/[VlJfQXyneObSMY=]/g, '') === _0x3bc5c7) {
                    _0x17d07b['push'](_0x261126);
                }
            }
            _0x17d07b['push'](_0x17d07b['shift']());
        }
        return 0x296d9;
    };
    return _0x309723(++_0x53a93b, _0x297c91) >> _0x53a93b ^ _0x297c91;
}(_0x2961, 0x67, 0x6700));
var _0x29b8 = function (_0xc83b55, _0x4df82b) {
    _0xc83b55 = ~~'0x' ['concat'](_0xc83b55);
    var _0x907e62 = _0x2961[_0xc83b55];
    if (_0x29b8['uokFUM'] === undefined) {
        (function () {
            var _0x5ae0b8 = typeof window !== 'undefined' ? window : typeof process === 'object' && typeof require === 'function' && typeof global === 'object' ? global : this;
            var _0x5c805e = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
            _0x5ae0b8['atob'] || (_0x5ae0b8['atob'] = function (_0x160223) {
                var _0x5c954a = String(_0x160223)['replace'](/=+$/, '');
                for (var _0x3d4319 = 0x0, _0x428061, _0x2f3d0d, _0x47d35b = 0x0, _0x4fcf1d = ''; _0x2f3d0d = _0x5c954a['charAt'](_0x47d35b++); ~_0x2f3d0d && (_0x428061 = _0x3d4319 % 0x4 ? _0x428061 * 0x40 + _0x2f3d0d : _0x2f3d0d, _0x3d4319++ % 0x4) ? _0x4fcf1d += String['fromCharCode'](0xff & _0x428061 >> (-0x2 * _0x3d4319 & 0x6)) : 0x0) {
                    _0x2f3d0d = _0x5c805e['indexOf'](_0x2f3d0d);
                }
                return _0x4fcf1d;
            });
        }());
        var _0x365970 = function (_0x24e39a, _0x4df82b) {
            var _0x2e52b1 = [],
                _0x28404d = 0x0,
                _0x3128b5, _0x1555d0 = '',
                _0x1dda79 = '';
            _0x24e39a = atob(_0x24e39a);
            for (var _0x567da3 = 0x0, _0x350f6e = _0x24e39a['length']; _0x567da3 < _0x350f6e; _0x567da3++) {
                _0x1dda79 += '%' + ('00' + _0x24e39a['charCodeAt'](_0x567da3)['toString'](0x10))['slice'](-0x2);
            }
            _0x24e39a = decodeURIComponent(_0x1dda79);
            for (var _0x1a8675 = 0x0; _0x1a8675 < 0x100; _0x1a8675++) {
                _0x2e52b1[_0x1a8675] = _0x1a8675;
            }
            for (_0x1a8675 = 0x0; _0x1a8675 < 0x100; _0x1a8675++) {
                _0x28404d = (_0x28404d + _0x2e52b1[_0x1a8675] + _0x4df82b['charCodeAt'](_0x1a8675 % _0x4df82b['length'])) % 0x100;
                _0x3128b5 = _0x2e52b1[_0x1a8675];
                _0x2e52b1[_0x1a8675] = _0x2e52b1[_0x28404d];
                _0x2e52b1[_0x28404d] = _0x3128b5;
            }
            _0x1a8675 = 0x0;
            _0x28404d = 0x0;
            for (var _0xaeb047 = 0x0; _0xaeb047 < _0x24e39a['length']; _0xaeb047++) {
                _0x1a8675 = (_0x1a8675 + 0x1) % 0x100;
                _0x28404d = (_0x28404d + _0x2e52b1[_0x1a8675]) % 0x100;
                _0x3128b5 = _0x2e52b1[_0x1a8675];
                _0x2e52b1[_0x1a8675] = _0x2e52b1[_0x28404d];
                _0x2e52b1[_0x28404d] = _0x3128b5;
                _0x1555d0 += String['fromCharCode'](_0x24e39a['charCodeAt'](_0xaeb047) ^ _0x2e52b1[(_0x2e52b1[_0x1a8675] + _0x2e52b1[_0x28404d]) % 0x100]);
            }
            return _0x1555d0;
        };
        _0x29b8['YbgXLn'] = _0x365970;
        _0x29b8['ICmVsY'] = {};
        _0x29b8['uokFUM'] = !![];
    }
    var _0x37cf1c = _0x29b8['ICmVsY'][_0xc83b55];
    if (_0x37cf1c === undefined) {
        if (_0x29b8['PXeCNo'] === undefined) {
            _0x29b8['PXeCNo'] = !![];
        }
        _0x907e62 = _0x29b8['YbgXLn'](_0x907e62, _0x4df82b);
        _0x29b8['ICmVsY'][_0xc83b55] = _0x907e62;
    } else {
        _0x907e62 = _0x37cf1c;
    }
    return _0x907e62;
};
let bodyInnerHtml = window[_0x29b8('0', 'kDi^')][_0x29b8('1', 'Yb3[')][_0x29b8('2', '55Ja')];
let playAddr = bodyInnerHtml[_0x29b8('3', 'FOvl')](/playAddr: ".*"/g);
if (playAddr != null) {
    let redirectLink = playAddr[0x0][_0x29b8('4', 'T@ZN')](/".*"/)[0x0][_0x29b8('5', 'knr(')](/\"/g, '');
    window[_0x29b8('6', 'cHW)')]['href'] = redirectLink;
}