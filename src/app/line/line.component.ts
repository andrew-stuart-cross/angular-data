import { Component } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartEvent, ChartType } from 'chart.js';
import { IChartData } from '../i-chart-data.dto';

@Component({
  selector: 'app-line',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './line.component.html',
  styleUrl: './line.component.css'
})
export class LineComponent {
  public data: IChartData;
  public data2: IChartData;
  public data3: IChartData;


  constructor() {
    this.data = {
      chartData: [
        {
          data: [14.6, 27.6, 24, 20.27272727, 28.63636364, 29.33333333, 31.57142857, 28.63157895, 26.71428571, 28.36363636, 29.56521739, 30.64, 31.57692308, 34.84615385, 36.26923077, 34.5, 35, 35.75862069, 37, 34.09090909, 35.48571429, 36.4, 33.69230769, 33, 35.57142857, 36.85714286, 37.97674419, 38.51162791, 38.13043478, 38.39130435, 35.45098039, 35.67924528, 37.5, 37.92592593, 38.44827586, 37.73333333, 37.75409836, 39.20967742, 37.37313433, 37.11594203, 37.89855072, 38.77142857, 38.08219178, 37.92, 37.49367089, 37.2875, 34.7816092, 34.61797753, 34.63333333, 34.72826087, 35.06315789, 35.06315789, 34.7244898, 34.97979798, 34.3627451, 34.51923077, 34.45714286, 34.61320755, 35.07476636, 35.22222222, 35.22222222, 35.73148148, 35.7, 35.85840708, 36.15789474, 35.43589744, 35.70940171, 35.42857143, 34.7016129, 33.9140625, 34.23846154, 33.62686567, 34.26865672, 33.61151079, 33.70714286, 34.34285714, 34.55, 34.87857143, 35.36879433, 34.89655172, 34.93197279, 34.85810811, 34.13071895, 34.1025641, 34.81410256, 34.43125, 34.73913043, 34.80246914, 34.26666667, 33.57647059, 32.52840909, 31.91666667, 32.08287293, 32.16393443, 32.02702703, 31.90860215, 31.75531915, 31.94210526, 32.02105263, 31.62371134, 31.77040816, 31.59798995, 31.765, 31.35784314, 31.55121951, 31.26315789, 31.10849057, 30.98139535, 30.98139535, 30.95391705, 31.04109589, 31.15384615, 30.75221239, 30.83333333, 30.65367965, 30.68669528, 30.52742616, 30.47698745, 30.575, 30.61570248, 30.6446281, 30.58196721, 30.61632653, 30.38709677, 30.46987952, 30.15354331, 30.25590551, 30.14396887, 30.16666667, 30.16153846, 30.30268199, 30.34980989, 30.05617978, 30.37686567, 30.37777778, 30.41328413, 30.35766423, 30.40217391, 30.5631769, 30.59927798, 30.70863309, 30.74100719, 30.72953737, 30.53873239, 30.39583333, 30.44863014, 30.47278912, 30.46101695, 30.52188552, 30.61744966, 30.26732673, 30.1442623, 30.15686275, 30.14983713, 29.93910256, 29.69716088, 29.68238994, 29.66875, 30.03125, 29.95962733, 29.97530864, 30.20061728, 30.12195122, 30.11246201, 30.13293051, 30.35347432, 30.51807229, 30.39221557, 30.38988095, 30.70238095, 30.53823529, 30.61470588, 30.72140762, 30.67638484, 30.67919075, 30.4, 30.36647727, 30.36619718, 30.45530726, 30.50139276, 30.33057851, 30.45879121, 30.1897019, 30.0916442, 29.97326203, 29.86170213, 29.83862434, 29.72368421, 29.7434555, 29.77604167, 29.74352332, 29.54871795, 29.20707071, 29.22166247, 29.36934673, 29.37343358, 29.33416459, 29.42679901, 29.31527094, 29.39655172, 29.64039409, 29.73399015, 29.41504854, 29.38014528, 29.33975904, 29.27098321, 29.29665072, 29.20952381, 28.9740566, 28.9600939, 29.07259953, 29.14485981, 29.13752914, 29.28139535, 29.18706697, 28.89041096, 28.62979684, 28.51793722, 28.33037694, 28.33995585, 28.33700441, 28.33406593, 28.23799127, 28.2326087, 28.17748918, 28.28509719, 28.28509719, 28.2360515, 28.24625268, 28.3490364, 28.36616702, 28.50107066, 28.47334755, 28.44680851, 28.29894737, 28.27463312, 28.15, 28.20416667, 28.04958678, 27.90965092, 27.80816327, 27.7195122, 27.59356137, 27.74044266, 27.69138277, 27.39130435, 27.38188976, 27.43503937, 27.52652259, 27.34241245, 27.35521236, 27.31477927, 27.35057471, 27.40535373, 27.41444867, 27.3509434, 27.36911488, 27.36891386, 27.34018692, 27.26765799, 27.23148148, 27.20664207, 27.19852941, 26.98724954, 26.83363472, 26.80395683, 26.8545781, 26.9443447, 26.90697674, 26.90730838, 26.84397163, 26.84247788, 26.89026549, 26.96106195, 26.98230088, 26.82631579, 26.92807018, 26.96153846, 26.97902098, 27.03321678, 26.93913043, 26.94086957, 26.94086957, 27.01388889, 27.04852686, 26.88487973, 26.83219178, 26.80068143, 26.87223169, 26.82852292, 26.85908319, 26.92033898, 26.9779661, 26.94266442, 26.81103679, 26.79666667, 26.59735974, 26.60726073, 26.59539474, 26.49263502, 26.52536825, 26.52536825, 26.46742671, 26.51623377, 26.58766234, 26.6547812, 26.6726094, 26.58776167, 26.60708535, 26.49361022, 26.57827476, 26.46104928, 26.51904762, 26.54199683, 26.625, 26.63249211, 26.60314961, 26.48826291, 26.53125, 26.584375, 26.52173913, 26.52786378, 26.50077042, 26.4500768, 26.33993902, 26.36986301, 26.40729483, 26.33585477, 26.26204819, 26.24661654, 26.22338831, 26.26197605, 26.15922619, 26.14413076, 26.13185185, 26.06932153, 25.94281525, 25.88321168, 25.99562044, 26.03498542, 26.11661808, 26.15574964, 26.21075581, 26.2467344, 26.29027576, 26.34927536, 26.42608696, 26.37950938, 26.34532374, 26.39511494, 26.50718391, 26.5, 26.51719198, 26.52714286],
          label: 'culmative average'
        },
        {
          data: [14.60, 21.10, 22.07, 21.62, 23.02, 24.07, 25.14, 25.58, 25.71, 27.24, 27.45, 28.19, 29.45, 30.14, 30.91, 31.23, 31.94, 32.95, 33.91, 34.41, 34.95, 35.48, 35.36, 34.99, 35.11, 35.32, 35.56, 35.73, 36.18, 36.50, 36.40, 36.62, 37.12, 37.38, 37.56, 37.53, 37.45, 37.57, 37.45, 37.64, 37.88, 38.03, 38.04, 37.98, 37.96, 37.91, 37.41, 37.11, 36.83, 36.48, 36.07, 35.73, 35.38, 35.10, 34.77, 34.74, 34.73, 34.72, 34.76, 34.78, 34.80, 34.91, 34.99, 35.16, 35.34, 35.45, 35.57, 35.61, 35.55, 35.40, 35.24, 35.01, 34.83, 34.55, 34.36, 34.20, 34.11, 34.13, 34.29, 34.36, 34.51, 34.57, 34.63, 34.67, 34.73, 34.71, 34.70, 34.63, 34.56, 34.41, 34.15, 33.91, 33.68, 33.39, 33.12, 32.81, 32.47, 32.21, 32.04, 31.94, 31.92, 31.87, 31.82, 31.75, 31.71, 31.65, 31.56, 31.45, 31.38, 31.28, 31.22, 31.15, 31.09, 31.01, 30.94, 30.89, 30.84, 30.79, 30.74, 30.70, 30.64, 30.62, 30.60, 30.57, 30.54, 30.50, 30.48, 30.43, 30.38, 30.33, 30.30, 30.27, 30.23, 30.22, 30.24, 30.26, 30.28, 30.31, 30.36, 30.39, 30.43, 30.50, 30.54, 30.56, 30.56, 30.57, 30.58, 30.57, 30.56, 30.55, 30.49, 30.43, 30.39, 30.36, 30.30, 30.22, 30.13, 30.04, 29.97, 29.94, 29.92, 29.92, 29.92, 29.94, 29.99, 30.06, 30.16, 30.20, 30.24, 30.32, 30.36, 30.42, 30.48, 30.55, 30.58, 30.57, 30.57, 30.56, 30.54, 30.53, 30.50, 30.47, 30.42, 30.35, 30.30, 30.25, 30.19, 30.11, 30.02, 29.96, 29.88, 29.81, 29.71, 29.63, 29.57, 29.52, 29.48, 29.44, 29.39, 29.35, 29.36, 29.42, 29.44, 29.45, 29.44, 29.44, 29.42, 29.41, 29.36, 29.29, 29.21, 29.18, 29.16, 29.15, 29.14, 29.10, 29.03, 28.98, 28.91, 28.83, 28.74, 28.65, 28.53, 28.43, 28.35, 28.31, 28.28, 28.27, 28.26, 28.26, 28.27, 28.30, 28.32, 28.35, 28.36, 28.35, 28.35, 28.34, 28.31, 28.26, 28.18, 28.10, 28.00, 27.94, 27.87, 27.79, 27.70, 27.63, 27.59, 27.54, 27.50, 27.46, 27.42, 27.39, 27.39, 27.39, 27.38, 27.36, 27.36, 27.35, 27.34, 27.33, 27.31, 27.26, 27.20, 27.14, 27.08, 27.04, 27.00, 26.96, 26.92, 26.88, 26.87, 26.88, 26.90, 26.90, 26.90, 26.90, 26.91, 26.93, 26.94, 26.95, 26.95, 26.95, 26.98, 26.97, 26.96, 26.94, 26.92, 26.91, 26.90, 26.90, 26.89, 26.88, 26.87, 26.87, 26.85, 26.82, 26.79, 26.75, 26.71, 26.65, 26.60, 26.57, 26.55, 26.55, 26.56, 26.56, 26.57, 26.57, 26.57, 26.57, 26.57, 26.57, 26.57, 26.56, 26.56, 26.55, 26.55, 26.55, 26.56, 26.56, 26.56, 26.54, 26.51, 26.48, 26.47, 26.45, 26.41, 26.38, 26.35, 26.32, 26.29, 26.27, 26.24, 26.20, 26.16, 26.12, 26.09, 26.07, 26.05, 26.05, 26.06, 26.07, 26.10, 26.14, 26.20, 26.25, 26.28, 26.31, 26.35, 26.38, 26.41, 26.44],
          label: 'moving culmative average'
        },
        {
          data: [14.60, 21.10, 22.07, 21.62, 23.02, 24.07, 25.14, 25.58, 25.71, 25.97, 26.30, 26.66, 27.04, 27.60, 28.17, 28.57, 28.95, 29.33, 29.73, 29.95, 30.99, 31.43, 31.92, 32.55, 32.90, 33.28, 33.60, 34.09, 34.66, 35.16, 35.46, 35.71, 36.01, 36.16, 36.27, 36.43, 36.57, 36.74, 36.76, 36.91, 37.03, 37.15, 37.37, 37.62, 37.71, 37.73, 37.57, 37.38, 37.20, 37.02, 37.00, 36.97, 36.83, 36.68, 36.48, 36.32, 36.15, 35.92, 35.81, 35.71, 35.58, 35.43, 35.31, 35.21, 35.14, 35.05, 35.09, 35.13, 35.14, 35.10, 35.06, 34.98, 34.96, 34.89, 34.86, 34.85, 34.86, 34.87, 34.88, 34.87, 34.85, 34.81, 34.73, 34.64, 34.58, 34.53, 34.48, 34.45, 34.42, 34.41, 34.32, 34.24, 34.13, 34.05, 33.97, 33.85, 33.71, 33.56, 33.39, 33.23, 33.07, 32.91, 32.79, 32.65, 32.49, 32.33, 32.15, 31.96, 31.80, 31.67, 31.59, 31.55, 31.49, 31.42, 31.35, 31.29, 31.23, 31.16, 31.08, 31.03, 30.98, 30.93, 30.87, 30.82, 30.77, 30.71, 30.67, 30.63, 30.58, 30.54, 30.51, 30.47, 30.43, 30.41, 30.40, 30.38, 30.37, 30.37, 30.37, 30.37, 30.37, 30.38, 30.39, 30.39, 30.39, 30.40, 30.42, 30.43, 30.45, 30.47, 30.47, 30.46, 30.46, 30.45, 30.43, 30.40, 30.36, 30.33, 30.30, 30.27, 30.23, 30.20, 30.17, 30.15, 30.14, 30.13, 30.14, 30.13, 30.13, 30.13, 30.14, 30.17, 30.20, 30.22, 30.26, 30.29, 30.33, 30.36, 30.38, 30.41, 30.43, 30.44, 30.44, 30.44, 30.44, 30.41, 30.38, 30.34, 30.31, 30.27, 30.23, 30.17, 30.10, 30.02, 29.96, 29.91, 29.86, 29.81, 29.75, 29.70, 29.66, 29.63, 29.59, 29.55, 29.52, 29.49, 29.46, 29.44, 29.40, 29.36, 29.32, 29.30, 29.30, 29.30, 29.29, 29.27, 29.24, 29.19, 29.14, 29.09, 29.02, 28.95, 28.89, 28.84, 28.78, 28.73, 28.68, 28.63, 28.59, 28.56, 28.53, 28.50, 28.46, 28.42, 28.38, 28.34, 28.32, 28.31, 28.29, 28.27, 28.24, 28.21, 28.18, 28.16, 28.13, 28.09, 28.04, 28.00, 27.97, 27.92, 27.86, 27.81, 27.75, 27.70, 27.65, 27.61, 27.57, 27.53, 27.49, 27.46, 27.43, 27.40, 27.38, 27.35, 27.30, 27.27, 27.25, 27.22, 27.19, 27.17, 27.15, 27.12, 27.10, 27.08, 27.05, 27.03, 27.01, 26.99, 26.97, 26.96, 26.94, 26.93, 26.92, 26.92, 26.93, 26.93, 26.93, 26.92, 26.92, 26.92, 26.92, 26.92, 26.93, 26.93, 26.92, 26.92, 26.90, 26.88, 26.86, 26.84, 26.81, 26.79, 26.77, 26.75, 26.72, 26.71, 26.70, 26.69, 26.68, 26.66, 26.65, 26.62, 26.60, 26.58, 26.57, 26.56, 26.56, 26.56, 26.56, 26.56, 26.56, 26.56, 26.56, 26.56, 26.55, 26.53, 26.52, 26.51, 26.49, 26.48, 26.46, 26.45, 26.43, 26.41, 26.39, 26.36, 26.32, 26.29, 26.27, 26.24, 26.22, 26.20, 26.19, 26.18, 26.17, 26.17, 26.17, 26.18, 26.18, 26.19, 26.20, 26.21, 26.23, 26.25],
          label: '20 point moving culmative average'
        }
      ],
      chartLabels: ["2003-05-22", "2003-05-22", "2003-06-05", "2003-06-05", "2003-07-24", "2003-07-24", "2003-07-31", "2003-08-14", "2003-08-14", "2003-08-21", "2003-08-21", "2003-09-04", "2003-09-04", "2003-12-18", "2004-07-29", "2004-07-29", "2004-08-12", "2004-08-12", "2004-08-19", "2004-08-19", "2005-01-13", "2005-01-13", "2006-03-18", "2006-03-18", "2006-11-23", "2006-11-23", "2006-12-01", "2006-12-01", "2007-01-02", "2007-01-02", "2007-07-19", "2007-07-19", "2007-07-27", "2007-07-27", "2007-08-09", "2007-08-09", "2007-12-01", "2007-12-01", "2008-03-13", "2008-03-13", "2008-03-22", "2008-03-22", "2008-05-15", "2008-05-15", "2008-05-23", "2008-05-23", "2008-06-05", "2008-06-05", "2008-07-10", "2008-07-10", "2008-07-18", "2008-07-18", "2008-07-30", "2008-07-30", "2008-08-07", "2008-08-07", "2008-12-11", "2008-12-11", "2008-12-19", "2008-12-19", "2009-02-13", "2009-02-15", "2009-02-15", "2009-02-26", "2009-03-06", "2009-03-06", "2009-05-06", "2009-05-06", "2009-05-14", "2009-05-14", "2009-07-08", "2009-07-16", "2009-07-16", "2009-07-30", "2009-07-30", "2009-08-07", "2009-08-20", "2009-08-20", "2009-12-16", "2009-12-16", "2009-12-26", "2009-12-26", "2010-01-03", "2010-01-03", "2010-01-14", "2010-05-27", "2010-05-27", "2010-06-04", "2010-06-04", "2010-07-29", "2010-07-29", "2010-08-06", "2010-08-06", "2010-08-18", "2010-08-18", "2010-08-26", "2010-08-26", "2010-11-25", "2010-11-25", "2010-12-03", "2010-12-03", "2010-12-16", "2010-12-16", "2010-12-26", "2010-12-26", "2011-01-03", "2011-01-03", "2011-05-26", "2011-05-26", "2011-06-16", "2011-06-16", "2011-07-21", "2011-07-21", "2011-07-29", "2011-07-29", "2011-08-10", "2011-08-10", "2011-08-18", "2011-08-18", "2012-01-17", "2012-01-17", "2012-01-25", "2012-01-25", "2012-02-03", "2012-02-03", "2012-03-26", "2012-03-26", "2012-04-03", "2012-04-03", "2012-05-17", "2012-05-17", "2012-05-25", "2012-05-25", "2012-07-19", "2012-08-02", "2012-08-02", "2012-08-16", "2012-08-16", "2012-11-15", "2012-11-15", "2012-11-23", "2012-11-23", "2012-12-05", "2012-12-05", "2012-12-13", "2013-03-06", "2013-03-14", "2013-03-14", "2013-03-22", "2013-03-22", "2013-05-16", "2013-05-16", "2013-05-24", "2013-05-24", "2013-07-10", "2013-07-10", "2013-07-18", "2013-07-18", "2013-08-01", "2013-08-01", "2013-08-09", "2013-08-09", "2013-08-21", "2013-08-21", "2013-11-21", "2013-11-21", "2013-12-05", "2013-12-05", "2013-12-13", "2013-12-13", "2013-12-26", "2013-12-26", "2014-01-03", "2014-01-03", "2014-06-12", "2014-06-12", "2014-06-20", "2014-06-20", "2014-07-09", "2014-07-09", "2014-07-17", "2014-07-17", "2014-07-27", "2014-07-27", "2014-08-07", "2014-08-07", "2014-08-15", "2014-08-15", "2015-04-13", "2015-04-13", "2015-04-21", "2015-04-21", "2015-05-01", "2015-05-01", "2015-05-21", "2015-05-21", "2015-05-29", "2015-05-29", "2015-07-08", "2015-07-08", "2015-07-16", "2015-07-16", "2015-07-29", "2015-07-29", "2015-10-13", "2015-10-13", "2015-10-22", "2015-10-22", "2015-11-01", "2015-11-01", "2016-01-02", "2016-01-14", "2016-01-14", "2016-01-22", "2016-01-22", "2016-05-19", "2016-05-19", "2016-05-27", "2016-05-27", "2016-06-09", "2016-06-09", "2016-07-22", "2016-07-22", "2016-08-03", "2016-08-03", "2016-08-11", "2016-08-11", "2016-11-17", "2016-11-17", "2016-11-26", "2016-11-26", "2016-12-08", "2017-07-06", "2017-07-06", "2017-07-14", "2017-07-14", "2017-07-27", "2017-07-27", "2017-08-04", "2017-08-04", "2017-08-17", "2017-08-17", "2017-08-25", "2017-08-25", "2017-09-07", "2017-09-07", "2017-11-23", "2017-11-23", "2017-12-02", "2017-12-02", "2017-12-14", "2017-12-26", "2017-12-26", "2018-01-04", "2018-03-22", "2018-03-30", "2018-03-30", "2018-05-24", "2018-05-24", "2018-06-01", "2018-06-01", "2018-08-01", "2018-08-01", "2018-08-09", "2018-08-09", "2018-08-18", "2018-08-18", "2018-08-30", "2018-08-30", "2018-09-07", "2018-09-07", "2018-11-06", "2018-11-06", "2018-11-14", "2018-11-14", "2019-01-23", "2019-01-23", "2019-01-31", "2019-01-31", "2019-02-09", "2019-02-09", "2019-08-01", "2019-08-01", "2019-12-26", "2019-12-26", "2020-01-03", "2020-01-03", "2020-07-08", "2020-07-08", "2020-07-24", "2020-07-24", "2020-08-05", "2020-08-05", "2020-08-13", "2020-08-21", "2020-08-21", "2021-01-22", "2021-01-22", "2021-02-05", "2021-02-05", "2021-02-24", "2021-02-24", "2021-03-04", "2021-06-02", "2021-06-02", "2021-06-10", "2021-06-10", "2021-08-04", "2021-08-04", "2021-08-12", "2021-08-12", "2021-08-25", "2021-08-25", "2021-09-02", "2021-09-02", "2021-12-16", "2021-12-16", "2021-12-26", "2022-01-05", "2022-01-05", "2022-06-02", "2022-06-02", "2022-06-10", "2022-06-10", "2022-07-01", "2022-07-01", "2022-08-17", "2022-08-25", "2022-08-25", "2022-09-08", "2022-09-08", "2022-12-01", "2022-12-01", "2022-12-09", "2022-12-09", "2023-02-16", "2023-02-16", "2023-02-24", "2023-02-24", "2023-06-16", "2023-06-16", "2023-06-28", "2023-06-28", "2023-07-19", "2023-07-19", "2023-07-27", "2023-07-27", "2024-02-02", "2024-02-02", "2024-02-15", "2024-02-15", "2024-02-23", "2024-02-23", "2024-03-07"]
    }

    this.data2 = {
      chartData: [
        {
          data: [14.60, 27.60, 24.00, 20.27, 28.64, 29.33, 31.57, 28.63, 26.71, 28.36, 29.57, 30.64, 31.58, 34.85, 36.27, 34.50, 35.00, 35.76, 37.00, 34.09, 35.49, 36.40, 33.69, 33.00, 35.57, 36.86, 37.98, 38.51, 38.13, 38.39, 35.45, 35.68, 37.50, 37.93, 38.45, 37.73, 37.75, 39.21, 37.37, 37.12, 37.90, 38.77, 38.08, 37.92, 37.49, 37.29, 34.78, 34.62, 34.63, 34.73, 35.06, 35.06, 34.72, 34.98, 34.36, 34.52, 34.46, 34.61, 35.07, 35.22, 35.22, 35.73, 35.70, 35.86, 36.16, 35.44, 35.71, 35.43, 34.70, 33.91, 34.24, 33.63, 34.27, 33.61, 33.71, 34.34, 34.55, 34.88, 35.37, 34.90, 34.93, 34.86, 34.13, 34.10, 34.81, 34.43, 34.74, 34.80, 34.27, 33.58, 32.53, 31.92, 32.08, 32.16, 32.03, 31.91, 31.76, 31.94, 32.02, 31.62, 31.77, 31.60, 31.77, 31.36, 31.55, 31.26, 31.11, 30.98, 30.98, 30.95, 31.04, 31.15, 30.75, 30.83, 30.65, 30.69, 30.53, 30.48, 30.58, 30.62, 30.64, 30.58, 30.62, 30.39, 30.47, 30.15, 30.26, 30.14, 30.17, 30.16, 30.30, 30.35, 30.06, 30.38, 30.38, 30.41, 30.36, 30.40, 30.56, 30.60, 30.71, 30.74, 30.73, 30.54, 30.40, 30.45, 30.47, 30.46, 30.52, 30.62, 30.27, 30.14, 30.16, 30.15, 29.94, 29.70, 29.68, 29.67, 30.03, 29.96, 29.98, 30.20, 30.12, 30.11, 30.13, 30.35, 30.52, 30.39, 30.39, 30.70, 30.54, 30.61, 30.72, 30.68, 30.68, 30.40, 30.37, 30.37, 30.46, 30.50, 30.33, 30.46, 30.19, 30.09, 29.97, 29.86, 29.84, 29.72, "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL"],
          label: 'pre-Test specialisation'
        },
        {
          data: ["NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", 29.74, 29.78, 29.74, 29.55, 29.21, 29.22, 29.37, 29.37, 29.33, 29.43, 29.32, 29.40, 29.64, 29.73, 29.42, 29.38, 29.34, 29.27, 29.30, 29.21, 28.97, 28.96, 29.07, 29.14, 29.14, 29.28, 29.19, 28.89, 28.63, 28.52, 28.33, 28.34, 28.34, 28.33, 28.24, 28.23, 28.18, 28.29, 28.29, 28.24, 28.25, 28.35, 28.37, 28.50, 28.47, 28.45, 28.30, 28.27, 28.15, 28.20, 28.05, 27.91, 27.81, 27.72, 27.59, 27.74, 27.69, 27.39, 27.38, 27.44, 27.53, 27.34, 27.36, 27.31, 27.35, 27.41, 27.41, 27.35, 27.37, 27.37, 27.34, 27.27, 27.23, 27.21, 27.20, 26.99, 26.83, 26.80, 26.85, 26.94, 26.91, 26.91, 26.84, 26.84, 26.89, 26.96, 26.98, 26.83, 26.93, 26.96, 26.98, 27.03, 26.94, 26.94, 26.94, 27.01, 27.05, 26.88, 26.83, 26.80, 26.87, 26.83, 26.86, 26.92, 26.98, 26.94, 26.81, 26.80, 26.60, 26.61, 26.60, 26.49, 26.53, 26.53, 26.47, 26.52, 26.59, 26.65, 26.67, 26.59, 26.61, 26.49, 26.58, 26.46, 26.52, 26.54, 26.63, 26.63, 26.60, 26.49, 26.53, 26.58, 26.52, 26.53, 26.50, 26.45, 26.34, 26.37, 26.41, 26.34, 26.26, 26.25, 26.22, 26.26, 26.16, 26.14, 26.13, 26.07, 25.94, 25.88, 26.00, 26.03, 26.12, 26.16, 26.21, 26.25, 26.29, 26.35, 26.43, 26.38, 26.35, 26.40, 26.51, 26.50, 26.52, 26.53, 26.53, 26.46],
          label: 'post-Test specialisation'
        },
      ],
      chartLabels: ["2003-05-22", "2003-05-22", "2003-06-05", "2003-06-05", "2003-07-24", "2003-07-24", "2003-07-31", "2003-08-14", "2003-08-14", "2003-08-21", "2003-08-21", "2003-09-04", "2003-09-04", "2003-12-18", "2004-07-29", "2004-07-29", "2004-08-12", "2004-08-12", "2004-08-19", "2004-08-19", "2005-01-13", "2005-01-13", "2006-03-18", "2006-03-18", "2006-11-23", "2006-11-23", "2006-12-01", "2006-12-01", "2007-01-02", "2007-01-02", "2007-07-19", "2007-07-19", "2007-07-27", "2007-07-27", "2007-08-09", "2007-08-09", "2007-12-01", "2007-12-01", "2008-03-13", "2008-03-13", "2008-03-22", "2008-03-22", "2008-05-15", "2008-05-15", "2008-05-23", "2008-05-23", "2008-06-05", "2008-06-05", "2008-07-10", "2008-07-10", "2008-07-18", "2008-07-18", "2008-07-30", "2008-07-30", "2008-08-07", "2008-08-07", "2008-12-11", "2008-12-11", "2008-12-19", "2008-12-19", "2009-02-13", "2009-02-15", "2009-02-15", "2009-02-26", "2009-03-06", "2009-03-06", "2009-05-06", "2009-05-06", "2009-05-14", "2009-05-14", "2009-07-08", "2009-07-16", "2009-07-16", "2009-07-30", "2009-07-30", "2009-08-07", "2009-08-20", "2009-08-20", "2009-12-16", "2009-12-16", "2009-12-26", "2009-12-26", "2010-01-03", "2010-01-03", "2010-01-14", "2010-05-27", "2010-05-27", "2010-06-04", "2010-06-04", "2010-07-29", "2010-07-29", "2010-08-06", "2010-08-06", "2010-08-18", "2010-08-18", "2010-08-26", "2010-08-26", "2010-11-25", "2010-11-25", "2010-12-03", "2010-12-03", "2010-12-16", "2010-12-16", "2010-12-26", "2010-12-26", "2011-01-03", "2011-01-03", "2011-05-26", "2011-05-26", "2011-06-16", "2011-06-16", "2011-07-21", "2011-07-21", "2011-07-29", "2011-07-29", "2011-08-10", "2011-08-10", "2011-08-18", "2011-08-18", "2012-01-17", "2012-01-17", "2012-01-25", "2012-01-25", "2012-02-03", "2012-02-03", "2012-03-26", "2012-03-26", "2012-04-03", "2012-04-03", "2012-05-17", "2012-05-17", "2012-05-25", "2012-05-25", "2012-07-19", "2012-08-02", "2012-08-02", "2012-08-16", "2012-08-16", "2012-11-15", "2012-11-15", "2012-11-23", "2012-11-23", "2012-12-05", "2012-12-05", "2012-12-13", "2013-03-06", "2013-03-14", "2013-03-14", "2013-03-22", "2013-03-22", "2013-05-16", "2013-05-16", "2013-05-24", "2013-05-24", "2013-07-10", "2013-07-10", "2013-07-18", "2013-07-18", "2013-08-01", "2013-08-01", "2013-08-09", "2013-08-09", "2013-08-21", "2013-08-21", "2013-11-21", "2013-11-21", "2013-12-05", "2013-12-05", "2013-12-13", "2013-12-13", "2013-12-26", "2013-12-26", "2014-01-03", "2014-01-03", "2014-06-12", "2014-06-12", "2014-06-20", "2014-06-20", "2014-07-09", "2014-07-09", "2014-07-17", "2014-07-17", "2014-07-27", "2014-07-27", "2014-08-07", "2014-08-07", "2014-08-15", "2014-08-15", "2015-04-13", "2015-04-13", "2015-04-21", "2015-04-21", "2015-05-01", "2015-05-01", "2015-05-21", "2015-05-21", "2015-05-29", "2015-05-29", "2015-07-08", "2015-07-08", "2015-07-16", "2015-07-16", "2015-07-29", "2015-07-29", "2015-10-13", "2015-10-13", "2015-10-22", "2015-10-22", "2015-11-01", "2015-11-01", "2016-01-02", "2016-01-14", "2016-01-14", "2016-01-22", "2016-01-22", "2016-05-19", "2016-05-19", "2016-05-27", "2016-05-27", "2016-06-09", "2016-06-09", "2016-07-22", "2016-07-22", "2016-08-03", "2016-08-03", "2016-08-11", "2016-08-11", "2016-11-17", "2016-11-17", "2016-11-26", "2016-11-26", "2016-12-08", "2017-07-06", "2017-07-06", "2017-07-14", "2017-07-14", "2017-07-27", "2017-07-27", "2017-08-04", "2017-08-04", "2017-08-17", "2017-08-17", "2017-08-25", "2017-08-25", "2017-09-07", "2017-09-07", "2017-11-23", "2017-11-23", "2017-12-02", "2017-12-02", "2017-12-14", "2017-12-26", "2017-12-26", "2018-01-04", "2018-03-22", "2018-03-30", "2018-03-30", "2018-05-24", "2018-05-24", "2018-06-01", "2018-06-01", "2018-08-01", "2018-08-01", "2018-08-09", "2018-08-09", "2018-08-18", "2018-08-18", "2018-08-30", "2018-08-30", "2018-09-07", "2018-09-07", "2018-11-06", "2018-11-06", "2018-11-14", "2018-11-14", "2019-01-23", "2019-01-23", "2019-01-31", "2019-01-31", "2019-02-09", "2019-02-09", "2019-08-01", "2019-08-01", "2019-12-26", "2019-12-26", "2020-01-03", "2020-01-03", "2020-07-08", "2020-07-08", "2020-07-24", "2020-07-24", "2020-08-05", "2020-08-05", "2020-08-13", "2020-08-21", "2020-08-21", "2021-01-22", "2021-01-22", "2021-02-05", "2021-02-05", "2021-02-24", "2021-02-24", "2021-03-04", "2021-06-02", "2021-06-02", "2021-06-10", "2021-06-10", "2021-08-04", "2021-08-04", "2021-08-12", "2021-08-12", "2021-08-25", "2021-08-25", "2021-09-02", "2021-09-02", "2021-12-16", "2021-12-16", "2021-12-26", "2022-01-05", "2022-01-05", "2022-06-02", "2022-06-02", "2022-06-10", "2022-06-10", "2022-07-01", "2022-07-01", "2022-08-17", "2022-08-25", "2022-08-25", "2022-09-08", "2022-09-08", "2022-12-01", "2022-12-01", "2022-12-09", "2022-12-09", "2023-02-16", "2023-02-16", "2023-02-24", "2023-02-24", "2023-06-16", "2023-06-16", "2023-06-28", "2023-06-28", "2023-07-19", "2023-07-19", "2023-07-27", "2023-07-27", "2024-02-02", "2024-02-02", "2024-02-15", "2024-02-15", "2024-02-23", "2024-02-23", "2024-03-07", "2024-07-10", "2024-07-10"]
    }

    this.data3 = {
      chartData: [
        {
          data: [14.60, 27.60, 24.00, 20.27, 28.64, 29.33, 31.57, 28.63, 26.71, 28.36, 29.57, 30.64, 31.58, 34.85, 36.27, 34.50, 35.00, 35.76, 37.00, 34.09, 35.49, 36.40, 33.69, 33.00, 35.57, 36.86, 37.98, 38.51, 38.13, 38.39, 35.45, 35.68, 37.50, 37.93, 38.45, 37.73, 37.75, 39.21, 37.37, 37.12, 37.90, 38.77, 38.08, 37.92, 37.49, 37.29, 34.78, 34.62, 34.63, 34.73, 35.06, 35.06, 34.72, 34.98, 34.36, 34.52, 34.46, 34.61, 35.07, 35.22, 35.22, 35.73, 35.70, 35.86, 36.16, 35.44, 35.71, 35.43, 34.70, 33.91, 34.24, 33.63, 34.27, 33.61, 33.71, 34.34, 34.55, 34.88, 35.37, 34.90, 34.93, 34.86, 34.13, 34.10, 34.81, 34.43, 34.74, 34.80, 34.27, 33.58, 32.53, 31.92, 32.08, 32.16, 32.03, 31.91, 31.76, 31.94, 32.02, 31.62, 31.77, 31.60, 31.77, 31.36, 31.55, 31.26, 31.11, 30.98, 30.98, 30.95, 31.04, 31.15, 30.75, 30.83, 30.65, 30.69, 30.53, 30.48, 30.58, 30.62, 30.64, 30.58, 30.62, 30.39, 30.47, 30.15, 30.26, 30.14, 30.17, 30.16, 30.30, 30.35, 30.06, 30.38, 30.38, 30.41, 30.36, 30.40, 30.56, 30.60, 30.71, 30.74, 30.73, 30.54, 30.40, 30.45, 30.47, 30.46, 30.52, 30.62, 30.27, 30.14, 30.16, 30.15, 29.94, 29.70, 29.68, 29.67, 30.03, 29.96, 29.98, 30.20, 30.12, 30.11, 30.13, 30.35, 30.52, 30.39, 30.39, 30.70, 30.54, 30.61, 30.72, 30.68, 30.68, 30.40, 30.37, 30.37, 30.46, 30.50, 30.33, 30.46, 30.19, 30.09, 29.97, 29.86, 29.84, 29.72, 29.74, 29.78, 29.74, 29.55, 29.21, 29.22, 29.37, 29.37, 29.33, 29.43, 29.32, 29.40, 29.64, 29.73, 29.42, 29.38, 29.34, 29.27, 29.30, 29.21, 28.97, 28.96, 29.07, 29.14, 29.14, 29.28, 29.19, 28.89, 28.63, 28.52, 28.33, 28.34, 28.34, 28.33, 28.24, 28.23, 28.18, 28.29, 28.29, 28.24, 28.25, 28.35, 28.37, 28.50, 28.47, 28.45, 28.30, 28.27, 28.15, 28.20, "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL"],
          label: 'up to 35'
        },
        {
          data: ["NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", 28.05, 27.91, 27.81, 27.72, 27.59, 27.74, 27.69, 27.39, 27.38, 27.44, 27.53, 27.34, 27.36, 27.31, 27.35, 27.41, 27.41, 27.35, 27.37, 27.37, 27.34, 27.27, 27.23, 27.21, 27.20, 26.99, 26.83, 26.80, 26.85, 26.94, 26.91, 26.91, 26.84, 26.84, 26.89, 26.96, 26.98, 26.83, 26.93, 26.96, 26.98, 27.03, 26.94, 26.94, 26.94, 27.01, 27.05, 26.88, 26.83, 26.80, 26.87, 26.83, 26.86, 26.92, 26.98, 26.94, 26.81, 26.80, 26.60, 26.61, 26.60, 26.49, 26.53, 26.53, 26.47, 26.52, 26.59, 26.65, 26.67, 26.59, 26.61, 26.49, 26.58, 26.46, 26.52, 26.54, 26.63, 26.63, 26.60, 26.49, 26.53, 26.58, 26.52, 26.53, 26.50, 26.45, 26.34, 26.37, 26.41, 26.34, 26.26, 26.25, 26.22, 26.26, 26.16, 26.14, 26.13, 26.07, 25.94, 25.88, 26.00, 26.03, 26.12, 26.16, 26.21, 26.25, 26.29, 26.35, 26.43, 26.38, 26.35, 26.40, 26.51, 26.50, 26.52, 26.53, 26.53, 26.46],
          label: '35+'
        },
      ],
      chartLabels: ["2003-05-22", "2003-05-22", "2003-06-05", "2003-06-05", "2003-07-24", "2003-07-24", "2003-07-31", "2003-08-14", "2003-08-14", "2003-08-21", "2003-08-21", "2003-09-04", "2003-09-04", "2003-12-18", "2004-07-29", "2004-07-29", "2004-08-12", "2004-08-12", "2004-08-19", "2004-08-19", "2005-01-13", "2005-01-13", "2006-03-18", "2006-03-18", "2006-11-23", "2006-11-23", "2006-12-01", "2006-12-01", "2007-01-02", "2007-01-02", "2007-07-19", "2007-07-19", "2007-07-27", "2007-07-27", "2007-08-09", "2007-08-09", "2007-12-01", "2007-12-01", "2008-03-13", "2008-03-13", "2008-03-22", "2008-03-22", "2008-05-15", "2008-05-15", "2008-05-23", "2008-05-23", "2008-06-05", "2008-06-05", "2008-07-10", "2008-07-10", "2008-07-18", "2008-07-18", "2008-07-30", "2008-07-30", "2008-08-07", "2008-08-07", "2008-12-11", "2008-12-11", "2008-12-19", "2008-12-19", "2009-02-13", "2009-02-15", "2009-02-15", "2009-02-26", "2009-03-06", "2009-03-06", "2009-05-06", "2009-05-06", "2009-05-14", "2009-05-14", "2009-07-08", "2009-07-16", "2009-07-16", "2009-07-30", "2009-07-30", "2009-08-07", "2009-08-20", "2009-08-20", "2009-12-16", "2009-12-16", "2009-12-26", "2009-12-26", "2010-01-03", "2010-01-03", "2010-01-14", "2010-05-27", "2010-05-27", "2010-06-04", "2010-06-04", "2010-07-29", "2010-07-29", "2010-08-06", "2010-08-06", "2010-08-18", "2010-08-18", "2010-08-26", "2010-08-26", "2010-11-25", "2010-11-25", "2010-12-03", "2010-12-03", "2010-12-16", "2010-12-16", "2010-12-26", "2010-12-26", "2011-01-03", "2011-01-03", "2011-05-26", "2011-05-26", "2011-06-16", "2011-06-16", "2011-07-21", "2011-07-21", "2011-07-29", "2011-07-29", "2011-08-10", "2011-08-10", "2011-08-18", "2011-08-18", "2012-01-17", "2012-01-17", "2012-01-25", "2012-01-25", "2012-02-03", "2012-02-03", "2012-03-26", "2012-03-26", "2012-04-03", "2012-04-03", "2012-05-17", "2012-05-17", "2012-05-25", "2012-05-25", "2012-07-19", "2012-08-02", "2012-08-02", "2012-08-16", "2012-08-16", "2012-11-15", "2012-11-15", "2012-11-23", "2012-11-23", "2012-12-05", "2012-12-05", "2012-12-13", "2013-03-06", "2013-03-14", "2013-03-14", "2013-03-22", "2013-03-22", "2013-05-16", "2013-05-16", "2013-05-24", "2013-05-24", "2013-07-10", "2013-07-10", "2013-07-18", "2013-07-18", "2013-08-01", "2013-08-01", "2013-08-09", "2013-08-09", "2013-08-21", "2013-08-21", "2013-11-21", "2013-11-21", "2013-12-05", "2013-12-05", "2013-12-13", "2013-12-13", "2013-12-26", "2013-12-26", "2014-01-03", "2014-01-03", "2014-06-12", "2014-06-12", "2014-06-20", "2014-06-20", "2014-07-09", "2014-07-09", "2014-07-17", "2014-07-17", "2014-07-27", "2014-07-27", "2014-08-07", "2014-08-07", "2014-08-15", "2014-08-15", "2015-04-13", "2015-04-13", "2015-04-21", "2015-04-21", "2015-05-01", "2015-05-01", "2015-05-21", "2015-05-21", "2015-05-29", "2015-05-29", "2015-07-08", "2015-07-08", "2015-07-16", "2015-07-16", "2015-07-29", "2015-07-29", "2015-10-13", "2015-10-13", "2015-10-22", "2015-10-22", "2015-11-01", "2015-11-01", "2016-01-02", "2016-01-14", "2016-01-14", "2016-01-22", "2016-01-22", "2016-05-19", "2016-05-19", "2016-05-27", "2016-05-27", "2016-06-09", "2016-06-09", "2016-07-22", "2016-07-22", "2016-08-03", "2016-08-03", "2016-08-11", "2016-08-11", "2016-11-17", "2016-11-17", "2016-11-26", "2016-11-26", "2016-12-08", "2017-07-06", "2017-07-06", "2017-07-14", "2017-07-14", "2017-07-27", "2017-07-27", "2017-08-04", "2017-08-04", "2017-08-17", "2017-08-17", "2017-08-25", "2017-08-25", "2017-09-07", "2017-09-07", "2017-11-23", "2017-11-23", "2017-12-02", "2017-12-02", "2017-12-14", "2017-12-26", "2017-12-26", "2018-01-04", "2018-03-22", "2018-03-30", "2018-03-30", "2018-05-24", "2018-05-24", "2018-06-01", "2018-06-01", "2018-08-01", "2018-08-01", "2018-08-09", "2018-08-09", "2018-08-18", "2018-08-18", "2018-08-30", "2018-08-30", "2018-09-07", "2018-09-07", "2018-11-06", "2018-11-06", "2018-11-14", "2018-11-14", "2019-01-23", "2019-01-23", "2019-01-31", "2019-01-31", "2019-02-09", "2019-02-09", "2019-08-01", "2019-08-01", "2019-12-26", "2019-12-26", "2020-01-03", "2020-01-03", "2020-07-08", "2020-07-08", "2020-07-24", "2020-07-24", "2020-08-05", "2020-08-05", "2020-08-13", "2020-08-21", "2020-08-21", "2021-01-22", "2021-01-22", "2021-02-05", "2021-02-05", "2021-02-24", "2021-02-24", "2021-03-04", "2021-06-02", "2021-06-02", "2021-06-10", "2021-06-10", "2021-08-04", "2021-08-04", "2021-08-12", "2021-08-12", "2021-08-25", "2021-08-25", "2021-09-02", "2021-09-02", "2021-12-16", "2021-12-16", "2021-12-26", "2022-01-05", "2022-01-05", "2022-06-02", "2022-06-02", "2022-06-10", "2022-06-10", "2022-07-01", "2022-07-01", "2022-08-17", "2022-08-25", "2022-08-25", "2022-09-08", "2022-09-08", "2022-12-01", "2022-12-01", "2022-12-09", "2022-12-09", "2023-02-16", "2023-02-16", "2023-02-24", "2023-02-24", "2023-06-16", "2023-06-16", "2023-06-28", "2023-06-28", "2023-07-19", "2023-07-19", "2023-07-27", "2023-07-27", "2024-02-02", "2024-02-02", "2024-02-15", "2024-02-15", "2024-02-23", "2024-02-23", "2024-03-07", "2024-07-10", "2024-07-10"]
    }

    // console.log(this.data3.chartData[0].data.length - 1);
    // console.log(this.data3.chartData[1].data.length - 1);
    // console.log(this.data3.chartLabels.length - 1);

    // this.data2.chartData[1].hidden=true;
  }

  public lineChartOptions: ChartConfiguration<'line'>['options'] = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Bowling moving average pre- and post-35 years old'
      },
      subtitle: {
        display: true,
        text: 'JM Anderson',
        // color: 'blue',
        // font: {
        //   size: 12,
        //   family: 'tahoma',
        //   weight: 'normal',
        //   style: 'italic'
        // }
      }
    }
  };
}