export default function StackedPlotCompositionPolicy(openmct) {
    function hasNumericTelemetry(domainObject) {
        const hasTelemetry = openmct.telemetry.isTelemetryObject(domainObject);
        if (!hasTelemetry) {
            return false;
        }

        let metadata = openmct.telemetry.getMetadata(domainObject);

        return metadata.values().length > 0 && hasDomainAndRange(metadata);
    }

    function hasDomainAndRange(metadata) {
        return (metadata.valuesForHints(['range']).length > 0
            && metadata.valuesForHints(['domain']).length > 0);
    }

    return {
        allow: function (parent, child) {
            let ans=true;

            if ((parent.type === 'telemetry.plot.stacked')
                && ((child.type !== 'telemetry.plot.overlay') && (hasNumericTelemetry(child) === false))
            ) {
                ans=false;
            }

            return ans;
        }
    };
}
