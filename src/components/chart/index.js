import PropTypes from "prop-types";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";
import { CHART_SETTINGS } from "../../constants/common";
import "./style.scss";

const Chart = ({ data, error, cityName }) => {
  if (error) return <div className="info-text">{error}</div>;

  return (
    <div className="chart-container">
      {data && (
        <>
          <div className="info-text">
            {cityName} forecast temperature &deg;C
          </div>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              margin={{ top: 30 }}
              width={CHART_SETTINGS.WIDTH}
              height={CHART_SETTINGS.HEIGHT}
              data={data}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey={CHART_SETTINGS.KEYS.DATE}
                fontSize={CHART_SETTINGS.FONT_SIZE}
              />
              <YAxis />
              <ReferenceLine y={CHART_SETTINGS.REFERENCE_LINE_VALUE} />
              <Bar
                label={{ fill: CHART_SETTINGS.COLORS.TEXT }}
                dataKey={CHART_SETTINGS.KEYS.TEMP}
                fill={CHART_SETTINGS.COLORS.BAR}
              />
            </BarChart>
          </ResponsiveContainer>
        </>
      )}
    </div>
  );
};

Chart.defaultProps = {
  data: null,
  error: null,
  cityName: null,
};

Chart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      temp: PropTypes.number,
      data: PropTypes.string,
    })
  ),
  error: PropTypes.string,
  cityName: PropTypes.string,
};

export default Chart;
