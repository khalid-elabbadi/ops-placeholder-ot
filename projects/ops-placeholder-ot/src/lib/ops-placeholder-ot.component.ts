import { Component, Input } from '@angular/core';

/**
 * @author Khalid ELABBADI - kha.elabbadi@gmail.com
 */

@Component({
  selector: 'ops-placeholder-ot',
  styleUrls: ['./ops-placeholder-ot.component.scss'],
  templateUrl: './ops-placeholder-ot.component.html'
})
export class OpsPlaceholderOtComponent {

  private elementRef = null;
  public placeholder = new Array<string>();

  @Input()
  public visibleOnlyOnValue = false;

  @Input()
  public color = '#959595';

  @Input('elementRef')
  public set setelementRef(elementRef) {

    this.elementRef = elementRef;

    if (this.elementRef != undefined) {

      // input style
      this.elementRef.style.position = "relative";
      this.elementRef.style.zIndex = "1";
      this.elementRef.style.backgroundColor = "transparent";
    }
  }

  @Input('placeholder')
  public set setPlaceHolder(value: string) {
    this.placeholder = new Array<string>();

    for (let i = 0; i < value.length; i++) {
      this.placeholder.push(value[i] == ' ' ? ';_;' : value[i]);
    }
  }

  public visible() {
    return (this.elementRef.value.length > 0 && this.visibleOnlyOnValue) || !this.visibleOnlyOnValue;
  }

  public getElementStyle() {

    var styles = window.getComputedStyle(this.elementRef);

    return {
      top: this.elementRef.offsetTop + 'px',
      left: this.elementRef.offsetLeft + 'px',
      height: this.elementRef.offsetHeight + 'px',
      width: this.elementRef.offsetWidth + 'px',
      font: styles['font'],
      wordSpacing: styles['wordSpacing'],
      letterSpacing: styles['letterSpacing'],
      textIndent: styles['textIndent'],
      fontWeight: styles['fontWeight'],
      lineHeight: styles['lineHeight'],
      paddingTop: styles['paddingTop'],
      paddingBottom: styles['paddingBottom'],
      marginTop: styles['marginTop'],
      marginBottom: styles['marginBottom'],
      paddingLeft: styles['paddingLeft'],
      paddingRight: styles['paddingRight'],
      marginLeft: styles['marginLeft'],
      marginRight: styles['marginRight'],
      fontSize: styles['fontSize'],
      fontFamily: styles['fontFamily'],
      border: styles['border'],
      outline: styles['outline'],
    };
  }

  public getColor(i: number) {
    return (i < this.elementRef.value.length) ? 'transparent' : this.color;
  }

}
