/**
 * 加载子模板.
 *
 * @author jun.yj
 * @email god.yangjun@gmail.com
 * @date 16/1/5
 */

template.helper('view', function( path, data ){
    return utils.$include( path, data );
});